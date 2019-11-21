$(document).ready(function () {
	"use strict";
	 $( "#speed" ).selectmenu();
	
	$("#progressbar").progressbar({
		value: 33
	});
	$("#disabled1").on("click", function () {
		$("#effect").removeClass("disabled");
	});
	
	$("#disabled4").on("click", function () {
		$("#effect4").removeClass("disabled");
	});
	
	$("#disabled0").on("click", function () {
		$("#effect0").removeClass("disabled");
	});
	
	$("#disabled2").on("click", function () {
		$("#effect2").removeClass("disabled");
	});
	
	$("#disabled3").on("click", function () {
		$("#effect3").removeClass("disabled");
	});
	$("input").checkboxradio();
	$(".widget input[type=submit], .widget a, .widget button").button();
	
	$("button, input, a").click(function (event) {
		event.preventDefault();
	});
	
	
	
	$(".slide-right").click(function () {
		$(".icon2").replaceWith($(".icon1"));
		$(".icon1").show();
	});
	
});
