$(document).ready(function () {
	$("#images").mousemove(function (event) {
		// -$(this).offset().left;
		//  -$(this).offset().top;
		var relX = event.pageX;
		var relY = event.pageY;
		var relBoxCoords = "Mouse X: " + relX + ", Y: " + relY;
		$("#coordBox").text(relBoxCoords);
	});
	$("img")
		.mouseenter(function () {
			$(this).css("opacity", "0.5");
			var className = $(this).attr("class");
			$("#inBox").text("In: " + className);
		})
		.mouseleave(function () {
			$(this).css("opacity", "1");
			var className = $(this).attr("class");
			$("#outBox").text("Out: " + className);
		})
		.dblclick(function () {
			var className = $(this).attr("class");
			switch (className) {
				case "aave":
					var win = window.open("http://aave.com/", "_blank");
					win.focus();
					break;
				case "discord":
					var win = window.open("http://discord.com/", "_blank");
					win.focus();
					break;
				case "reddit":
					var win = window.open("http://reddit.com/", "_blank");
					win.focus();
					break;
				case "tachiyomi":
					var win = window.open("http://tachiyomi.com/", "_blank");
					win.focus();
					break;
				case "twitter":
					var win = window.open("http://twitter.com/", "_blank");
					win.focus();
					break;
				case "youtube":
					var win = window.open("http://youtube.com/", "_blank");
					win.focus();
					break;
			}
		})
		.click(function () {
			var className = $(this).attr("class");
			switch (className) {
				case "aave":
					$("#imageDisplay").attr("src", "img/aave.png");
					break;
				case "discord":
					$("#imageDisplay").attr("src", "img/discord.png");
					break;
				case "reddit":
					$("#imageDisplay").attr("src", "img/reddit.png");
					break;
				case "tachiyomi":
					$("#imageDisplay").attr("src", "img/tachiyomi.png");
					break;
				case "twitter":
					$("#imageDisplay").attr("src", "img/twitter.png");
					break;
				case "youtube":
					$("#imageDisplay").attr("src", "img/youtube.png");
					break;
			}
		});
});
