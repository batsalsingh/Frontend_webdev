$(".manager").click(function () {
  $(".employee").removeClass("highlight");
  $(this).nextAll(".employee").each((i, emp) => {
    if ($(emp).next().hasClass("contact")) $(emp).addClass("highlight");
  });
});

$(".employee").hover(function () {
  $(this).next(".contact").show();
}, function () {
  $(this).next(".contact").hide();
});

$(".deptTitle").click(function () {
  $(".department").removeClass("dept-highlight");
  $(this).parent().addClass("dept-highlight");
  $(this).parent().children().css("background", "#e0f7fa");
});

$("#randomBtn").click(function () {
  let emps = $(".employee");
  let random = emps[Math.floor(Math.random() * emps.length)];
  $(emps).removeClass("highlight");
  $(random).siblings(".employee").addClass("highlight");
});

let collapsed = false;

$("#toggleTeams").click(function () {
  collapsed = !collapsed;
  if (collapsed) {
    $(".department").find(".employee, .contact").hide();
  } else {
    $(".department").find(".employee, .contact").show();
  }
});