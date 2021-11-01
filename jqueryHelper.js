$(document).ready(function () {
	$("img")
		.mouseenter(function () {
			$(this).css("opacity", "0.5");
		})
		.mouseleave(function () {
			$(this).css("opacity", "1");
		});
	$(".aave").dbclick(function () {
		window.location = "https://aave.com/";
	});
	$(".discord").dbclick(function () {
		window.location = "https://discord.com/";
	});
	$(".reddit").dbclick(function () {
		window.location = "https://reddit.com/";
	});
	$(".tachiyomi").dbclick(function () {
		window.location = "https://tachiyomi.org/";
	});
	$(".twitter").dbclick(function () {
		window.location = "https://twitter.com/";
	});
	$(".youtube").dbclick(function () {
		window.location = "https://youtube.com/";
	});
});
