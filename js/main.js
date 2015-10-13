/*
 * Author: Miko
 * Version: 0.1.0
 * Compile Date: 2015-10-13 14:23
*/ 
// JavaScript Document
define(function(require, exports, module) {
	var jQuery = require('jquery');
	//require('jquery-ui');
	var fullpage = require('jquery.fullPage.min');
	
$(document).ready(function() {
	$('#fullpage').fullpage({
		sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', '#fff'],
		anchors: ['1stPage', '2ndPage', '3rdPage', '4thpage', 'lastPage'],
		menu: '#menu',
		scrollingSpeed: 800
	});
	
	$(".se_1").mousemove(function(e){    //背景随鼠标移动
		var position=$(this).css("background-position");
		var x=e.clientX/80,
				y=e.clientY/80,
				width=parseInt($(window).width()),
				height=parseInt($(window).height()),
				now_x=-(1920-width)/2,
				now_y=-(1200-height)/2;
		$(this).css("background-position",(x+now_x)+"px "+(y+now_y)+"px");	
	});
	$(".page-next").click(function(){
		$.fn.fullpage.moveSectionDown();
	});
	$('#index').click(function(e){ //导航首页跳转
		$.fn.fullpage.moveTo(1, 0);
	});
  $('#index-2').click(function(e){ //导航首页跳转
		$.fn.fullpage.moveTo(2, 1);
	});
	$('#index-3').click(function(e){ //导航首页跳转
		$.fn.fullpage.moveTo(3, 2);
	});

});

});