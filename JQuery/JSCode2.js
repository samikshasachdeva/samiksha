// JavaScript Document
$(document).ready(function () {
	"use strict";
	$("#section2").hide();
	$(".usebutton").click(function () {
		$("#section1").replaceWith($("#section2"));
		$("#section2").show();
	});

});
