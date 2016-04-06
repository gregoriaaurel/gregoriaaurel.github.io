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
		$("html, body").animate({scrollTop:goTop}, 600, "easeInOutQuart");

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


$(document).ready(function(){       
   var scroll_start = 0;
   var startchange = $('.nav');
   var offset = startchange.offset();
   $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $('.navbar').css('background-color', '#fff');
       } else {
          $('.navbar').css('background-color', 'transparent');
       }
   });
});


$(function() {
        $('#nav li a').click(function() {
           $('#nav li').removeClass();
           $($(this).attr('href')).addClass('active');
        });
     });



		window.sr = ScrollReveal();
sr.reveal('.navbar-brand');
sr.reveal('.splash .header', {opacity: 0.2, duration: 500});
sr.reveal('.splash .navbar-br', {duration: 1000});
sr.reveal('.description', { duration: 1000});

sr.reveal('.about .about-description', {reset: true, duration: 1000}, 50);
sr.reveal('.about .additional', {reset: true, duration: 1000}, 50);
sr.reveal('.portfolio-item', {reset: true, duration: 2000}, 50);


});