let banners = $(".banner");
let current = 0;

$("#hideBtn").click(() => {
  banners.hide();
});

$("#showBtn").click(() => {
  banners.show();
});

$("#slideBtn").click(() => {
  banners.each(function () {
    if ($(this).is(":visible")) $(this).slideUp();
    else $(this).slideDown();
  });
});

$("#fadeBtn").click(() => {
  banners.each(function () {
    if ($(this).is(":visible")) $(this).fadeOut();
    else $(this).fadeIn();
  });
});

function rotateBanners() {
  banners.fadeOut();
  $(banners[current]).fadeIn();
  current = (current + 1) % banners.length;
}

banners.hide();
$(banners[0]).show();

setInterval(rotateBanners, 5000);