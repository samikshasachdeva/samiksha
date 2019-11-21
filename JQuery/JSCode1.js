// JavaScript Document
$(document).ready(function () {
	"use strict";

	$("#tabs").tabs();
	$("#view2").hide();
	$("#view3").hide();
	$("#view4").hide();
	$("#view5").hide();
	$("#view6").hide();
	$("#view7").hide();
	$("#view8").hide();
	$("#view9").hide();
	$(".icon1").hide();
	
$("#speed").selectmenu();
	
	$(".usebutton1").click(function () {
		$("#view1").replaceWith($("#view2"));
		$("#view2").show();
	});
	$(".usebutton2").click(function () {
		$("#view2").replaceWith($("#view3"));
		$("#view3").show();
	});
	$(".usebutton3").click(function () {
		$("#view3").replaceWith($("#view4"));
		$("#view4").show();
	});
	$(".usebutton4").click(function () {
		$("#view4").replaceWith($("#view5"));
		$("#view5").show();
	});
	$(".usebutton5").click(function () {
		$("#view5").replaceWith($("#view6"));
		$("#view6").show();
	});
	$(".usebutton6").click(function () {
		$("#view6").replaceWith($("#view7"));
		$("#view7").show();
	});
	$(".usebutton7").click(function () {
		$("#view7").replaceWith($("#view8"));
		$("#view8").show();
	});
	$(".usebutton8").click(function () {
		$("#view8").replaceWith($("#view9"));
		$("#view9").show();
	});

	$("#accordion").accordion();

	$("#tabs").tabs();

	$('#myModal').on('shown.bs.modal', function () {
		$('#myInput').trigger('focus');
	});

	$("fieldset").controlgroup();

	$("#datepicker").datepicker({
		showButtonPanel: true
	});

	$(".button-back").click(function () {
		$("#section2").replaceWith($("#section1"));
		$("#section1").show();
	});
	

});
