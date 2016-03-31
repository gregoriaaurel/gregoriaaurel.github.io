$(document).ready(function(){

	$(".button-projects").click(function(event){
		//var goTop = 300;
		event.preventDefault();
		var goTop = $(".projects").offset().top;
		// console.log($(".projects").offset().top );
		$("html, body").animate({scrollTop:goTop}, 1000, "easeInOutQuart");

	});


	$(".button-about").click(function(event){
		event.preventDefault();
		var goTop = $(".about").offset().top;
		 console.log($(".about").offset().top );
		$("html, body").animate({scrollTop:goTop}, 1000, "easeInOutQuart");

	});


		$(".button-contact").click(function(event){
		event.preventDefault();
		var goTop = $(".contact").offset().top;
		 console.log($(".contact").offset().top );
		$("html, body").animate({scrollTop:goTop}, 1000, "easeInOutQuart");

	});


		$(".button-home").click(function(event){
		event.preventDefault();
		var goTop = $(".home").offset().top;
		 console.log($(".home").offset().top );
		$("html, body").animate({scrollTop:goTop}, 1000, "easeInOutQuart");

	});

		window.sr = ScrollReveal();
sr.reveal('.splash .header', {opacity: 0.2}, {reset:true, duration: 1000});
sr.reveal('.navbar-brand', {reset:true, duration: 1000});
sr.reveal('.description', {duration: 2000});

sr.reveal('.projects .header', {duration: 2000});
sr.reveal('.project-item', {duration: 2000});


});