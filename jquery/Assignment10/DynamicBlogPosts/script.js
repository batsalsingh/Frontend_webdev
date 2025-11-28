$("#addPost").click(() => {
  $("#posts").append(`<div class="post">New blog post added</div>`);
});

$("#prependPost").click(() => {
  $("#posts").prepend(`<div class="post">🔥 Featured Post</div>`);
});

$("#removeLast").click(() => {
  $("#posts .post").last().remove();
});

$("#addTag").click(() => {
  const tag = $("#tagInput").val().trim();
  if (tag !== "") {
    $("#posts .post").each(function () {
      $(this).before(`<div>[${tag}]</div>`);
      $(this).after(`<div>/${tag}</div>`);
    });
  }
});

$("#highlightBtn").click(() => {
  const key = $("#keyword").val().toLowerCase();
  $(".post").removeClass("highlight");
  if (key !== "") {
    $(".post").each(function () {
      if ($(this).text().toLowerCase().includes(key)) {
        $(this).addClass("highlight");
      }
    });
  }
});