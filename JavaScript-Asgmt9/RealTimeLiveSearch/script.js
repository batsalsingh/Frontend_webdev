$(document).ready(function () {
  $("#search-box").on("keyup", function () {
    let query = $(this).val().toLowerCase().trim();
    let resultsDiv = $("#results");
    let loader = $("#loader");

    if (query === "") {
      resultsDiv.empty();
      loader.hide();
      return;
    }

    $.ajax({
      url: "db.json",
      type: "GET",
      dataType: "json",
      data: { q: query },

      beforeSend: function () {
        loader.show();
        resultsDiv.empty();
      },

      success: function (data) {
        loader.hide();
        let found = false;

        let filteredData = data.filter((item) =>
          item.name.toLowerCase().includes(query)
        );

        if (filteredData.length > 0) {
          $.each(filteredData, function (key, product) {
            let html = `
                            <div class="product-card">
                                <img src="${product.image}" alt="${product.name}">
                                <div class="product-info">
                                    <h4>${product.name}</h4>
                                    <p class="price">$${product.price}</p>
                                </div>
                            </div>
                        `;
            resultsDiv.append(html);
          });
        } else {
          resultsDiv.html('<p class="no-results">No products found.</p>');
        }
      },

      error: function () {
        loader.hide();
        resultsDiv.html(
          '<p style="color:red; text-align:center;">Error loading data.</p>'
        );
      },
    });
  });
});
