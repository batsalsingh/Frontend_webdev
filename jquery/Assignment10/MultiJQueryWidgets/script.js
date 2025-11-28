var slides = jq1(".slide");
var current = 0;

function rotate() {
  slides.hide();
  jq1(slides[current]).show();
  current = (current + 1) % slides.length;
}

rotate();
setInterval(rotate, 3000);

jq1("#highlightWidget").click(function () {
  jq1(slides[current]).addClass("active-widget");
});

jq2("#openModal").click(function () {
  jq2("#modalBox").fadeIn();
  setTimeout(() => jq2("#modalBox").fadeOut(), 2000);
});

jq2(".tip").hover(function (e) {
  jq2("#tooltipBox").text(jq2(this).data("text"));
  jq2("#tooltipBox").css({
    left: e.pageX + 10,
    top: e.pageY + 10
  }).show();
}, function () {
  jq2("#tooltipBox").hide();
});