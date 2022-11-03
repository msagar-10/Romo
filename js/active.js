(function($) {
    "use strict";
     $(document).on('ready', function() {	
		

		/*====================================
			Aos Animate JS
		======================================*/	
		AOS.init({
			duration:1500,
			disable:!1,
			offset:0,
			once:!0,
			easing:"ease"
		});

		/*====================================
			CounterUp JS
		======================================*/ 
		$('.counter').counterUp({
			time: 1500,
		});
		
		/*====================================
			Header Sticky JS
		======================================*/ 
		var activeSticky = $("#active-sticky"),
			winDow = $(window);
			winDow.on("scroll", function () {
				var scroll = $(window).scrollTop(),
				isSticky = activeSticky;
				if (scroll < 50) {
				isSticky.removeClass("is-sticky");
				} else {
				isSticky.addClass("is-sticky");
				}
		});

		/*====================================
			Nice Select JS
		======================================*/ 
		$('select').niceSelect();
		
		/*===============================
			Checkbox JS
		=================================*/ 
		$('input[type="checkbox"]').change(function(){
			if($(this).is(':checked')){
				$(this).parent("label").addClass("checked");
			} else {
				$(this).parent("label").removeClass("checked");
			}
		});
		
		/*=====================================
			Video Popup JS
		======================================*/ 
		$('.video-popup').magnificPopup({
			type: 'iframe',
			removalDelay: 300,
			mainClass: 'mfp-fade'
		});
		
		/*====================================
			Mobile Menu
		======================================*/ 
		var $offcanvasNav = $("#offcanvas-menu a");
			$offcanvasNav.on("click", function () {
				var link = $(this);
				var closestUl = link.closest("ul");
				var activeLinks = closestUl.find(".active");
				var closestLi = link.closest("li");
				var linkStatus = closestLi.hasClass("active");
				var count = 0;

			closestUl.find("ul").slideUp(function () {
				if (++count == closestUl.find("ul").length)
				activeLinks.removeClass("active");
			});
			if (!linkStatus) {
				closestLi.children("ul").slideDown();
				closestLi.addClass("active");
			}
		});  

		  
		/*====================================
			Trusted Clients Slider JS
		======================================*/ 
		$('.trusted-clinets-slider').owlCarousel({
			items:5,
			autoplay:true,
			loop:true,
			margin:70,
			autoplayTimeout:4000,
			autoplayHoverPause:false,
			autoWidth:true,
			smartSpeed: 1000,
			merge:true,
			nav:false,
			navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
			dots:false,
			responsive:{
				300: {
					items:1,
				},
				480: {
					items:1,
				},
				768: {
					items:3,
				},
				1024: {
					items:5,
				},
				1170: {
					items:5,
				},
			}
		});	


		/*====================================
			Testimonial Slider JS
		======================================*/ 
		$(".testimonial-slider").owlCarousel({
			autoplay: false,
			autoplayTimeout: 3000,
			autoplayHoverPause: false,
			autoWidth:true,
			items: 1,
			center: true,
			nav: false,
			margin: 0,
			dots: true,
			loop: true,
			responsive: {
				0: { items: 1 },
				480: { items: 1 },
				575: { items: 1 },
				768: { items: 2 },
				991: { items: 3 },
				1200: { items: 3 }
			}
		});
	
		
		/*====================================
			Scroll To Top JS
		======================================*/
		var lastScrollTop = '';
		var scrollToTopBtn = '.scrollToTop'

		function stickyMenu($targetMenu, $toggleClass) {
		  var st = $(window).scrollTop();
		  if ($(window).scrollTop() > 600) {
			if (st > lastScrollTop) {
			  $targetMenu.removeClass($toggleClass);

			} else {
			  $targetMenu.addClass($toggleClass);
			};
		  } else {
			$targetMenu.removeClass($toggleClass);
		  };
		  lastScrollTop = st;
		};
		$(window).on("scroll", function () {
		  stickyMenu($('.sticky-header'), "active");
		  if ($(this).scrollTop() > 400) {
			$(scrollToTopBtn).addClass('show');
		  } else {
			$(scrollToTopBtn).removeClass('show');
		  }
		});
		
		$(scrollToTopBtn).on('click', function (e) {
		  e.preventDefault();
		  $('html, body').animate({
			scrollTop: 0
		  }, 300);
		  return false;
		});

	});
	
		/*====================================
			Preloader JS
		======================================*/
		$(window).on('load', function (event) {
			$('.preloader').delay(800).fadeOut(500);
		})


})(jQuery);
