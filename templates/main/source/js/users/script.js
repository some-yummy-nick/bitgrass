

$(document).ready(function () {

	$(".js-scroll").click(function () {
		if ($(this).attr("href") == "" || $(this).attr("href") == "#" || $(this).attr("href") == "javascript:void(0)") {
			return false;
		}
		var elementClick = $(this).attr("href");
		$('html,body').stop().animate({scrollTop: $(elementClick).offset().top}, 1000);
		return false;
	});


	$("body").on("click", "#menuButton", function (o) {
		o.preventDefault();
		var s = $(this);
		s.toggleClass("is-active").next().slideToggle("300")
	}),
			$(window).on("resize load", function () {
				$(".main-nav").find("ul").removeAttr("style"), $(window).width() < 768 ? $(".row-history").on("click", ".c-history__header", function () {
					$(this).closest(".row-history").toggleClass("open").siblings().removeClass("open")
				}) : $(".row-history").removeClass("open")
			})

});