function updateCount() {
  const visible = $(".course:visible").length;
  $("#count").text(visible + " courses found");
}

$("#search").keyup(function () {
  const text = $(this).val().toLowerCase();
  $(".course").each(function () {
    const name = $(this).text().toLowerCase();
    if (name.includes(text)) {
      $(this).show();
      const original = $(this).text();
      const highlighted = original.replace(new RegExp(text, "i"), match => `<span class="highlight">${match}</span>`);
      $(this).html(highlighted);
    } else {
      $(this).hide();
    }
  });
  updateCount();
});

$("#clearBtn").click(() => {
  $("#search").val("");
  $(".course").show().each(function () {
    $(this).text($(this).text());
  });
  updateCount();
});

updateCount();