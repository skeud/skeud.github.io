/*
	Name: readme
	Description: Responsive HTML5 Template
	Version: 1.0
	Author: pixelwars
*/

(function($) { "use strict"; 
	
	/* global variables */
	var $masonry_container;
	
	/* DOCUMENT READY */
	$(function() {

        
		// ------------------------------
        // HEADER SEARCH TOGGLE
        $('.search-toggle').click(function(e) {
            e.stopPropagation();
            $('html').toggleClass('is-search-toggled-on');
            $('html').removeClass('is-social-toggled-on');
            if($('html').hasClass('is-search-toggled-on')) {
                $('.search-container input[type="search"]').trigger('focus');
            }
        });
        $('.search-container *').click(function(e) {
            e.stopPropagation();
        });

        // HEADER MENU TOGGLE
        $('.menu-toggle').click(function(e) {
            e.stopPropagation();
            $('html').toggleClass('is-menu-toggled-on');
            $('html').removeClass('is-search-toggled-on');
            $('html').removeClass('is-social-toggled-on');
        });

        // HEADER SOCIAL TOGGLE
        $('.social-toggle').click(function(e) {
            e.stopPropagation();
            $('html').toggleClass('is-social-toggled-on');
            $('html').removeClass('is-search-toggled-on');
        });
        $('.social-container *').click(function(e) {
            e.stopPropagation();
        });

        // close on anywhere click
        $(document).click (function (e) {     
            $('html').removeClass('is-search-toggled-on');
            $('html').removeClass('is-social-toggled-on');
            $('html').removeClass('is-menu-toggled-on');
        });
        // ------------------------------
        
        
        
		// ------------------------------
		/* SOCIAL FEED WIDGET */
		var socialFeed = $('.social-feed');
		if(socialFeed.length) {
			socialFeed.each(function() {
				$(this).socialstream({
					socialnetwork: $(this).data("social-network"),
					limit: $(this).data("limit"),
					username: $(this).data("username")
				})
			});	
		}
		// ------------------------------
		
		
		// ------------------------------
		// FILL PROGRESS BARS
		function fillBars() {
			$('.bar').each(function() {
				 var bar = $(this);
                 var percent = bar.attr('data-percent');
				 bar.find('.progress').css('width', percent + '%' ).html('<span>'+percent+'</span>');
				});
		}	
		// ------------------------------
		fillBars();
		
		// ------------------------------
		// Rotating Words
		var rotate_words = $('.rotate-words');
		if(rotate_words.length) {
			
			var next_word_index = 0;
			
			if(Modernizr.csstransforms) {
			
				rotate_words.each(function(index, element) {
					$(element).find('span').eq(0).addClass('active');
					setInterval(function(){
						next_word_index = $(element).find('.active').next().length ? $(element).find('.active').next().index() : 0;
						$(element).find('.active').addClass('rotate-out').removeClass('rotate-in active');
						$(element).find('span').eq(next_word_index).addClass('rotate-in active').removeClass('rotate-out');
					},3000);
				});
	
			}
			else {
				
				rotate_words.each(function(index, element) {
					$(element).find('span').eq(0).addClass('active').show();
					setInterval(function(){
						next_word_index = $(element).find('.active').next().length ? $(element).find('.active').next().index() : 0;
						$(element).find('.active').removeClass('active').slideUp(500);
						$(element).find('span').eq(next_word_index).addClass('active').slideDown(500);
					},3000);
				});
			}
		}
		// ------------------------------
		
		
        
        // ------------------------------
		// FluidBox : Zoomable Images
		$('a[rel="lightbox"], .gallery a, .r-gallery-single .media-box a').fluidbox();
		$('.entry-content > p a, .wp-caption a').each(function(index, element) {
			
            if($(this).attr('href') != null) {
				if($(this).attr('href').match(/\.(jpeg|jpg|gif|png)$/) != null) {
					$(this).fluidbox();
					}
				}
        });
        // ------------------------------
        
        
        // ------------------------------
        // SHARE BUTTON + READING TIME
		if(!$('html').hasClass("no-canvas")) { //disable on IE8 
			
			//Share Button
			if($('.share').length) {	
				new Share('.share', {
					ui: { flyout: "bottom left" },
					networks: {
						email: {   
						  description: window.location.href
						}
					}
				});
			}
			
			 // READING TIME
			 if($('.read-time').length) {	 
				 $('article, .read-next').each(function() {
					
						$(this).readingTime({
							readingTimeTarget: $(this).find('.eta'),
							remotePath: $(this).find('.entry-title a').attr('href'),
							remoteTarget: 'article .entry-content'
						});
						
					});
				
			 
					 // reading time for blog single with featured image with sidebar
					 if($('.site-main > .post-thumbnail').length) {	 
						$('.hentry.post .entry-content').readingTime({
							readingTimeTarget: $(this).find('.eta'),
							});
					 }
			 }
			 
            
            // Selection Sharer
            if($('.single').length) {	
                $('.single .post .entry-content p, .single .post .entry-content blockquote').selectionSharer();
            }
			 
		}
        // ------------------------------
        
        
	
        // ------------------------------
		/* BOOKS */
		var bookshelf = $('.bookshelf');
		if(bookshelf.length) {
			
			bookshelf.find('figure').each(function(index, element) {
				
				var el = $(this);
				var front = el.find('.front');
				front.css('background-image', 'url(' + front.find('img').attr('src') + ')');
				
				var spine = el.find('.spine');
				spine.css('background-image', 'url(' + spine.find('img').attr('src') + ')');
				
				el.find('.open-details').click(function() {
					el.addClass('details-open');
					return false;
				});
				
				el.find('.close-details').click(function() {
					el.removeClass('details-open');
				});
		
			});	
			
		}

		// csstransformspreserve3d check
		(function(Modernizr, win){
			Modernizr.addTest('csstransformspreserve3d', function () {
		
				var prop = Modernizr.prefixed('transformStyle');
				var val = 'preserve-3d';
				var computedStyle;
				if(!prop) return false;
		
				prop = prop.replace(/([A-Z])/g, function(str,m1){ return '-' + m1.toLowerCase(); }).replace(/^ms-/,'-ms-');
		
				Modernizr.testStyles('#modernizr{' + prop + ':' + val + ';}', function (el, rule) {
					computedStyle = win.getComputedStyle ? getComputedStyle(el, null).getPropertyValue(prop) : '';
				});
		
				return (computedStyle === val);
			});
		}(Modernizr, window));
        // ------------------------------
		

		
		// ------------------------------
		// remove click delay on touch devices
		//FastClick.attach(document.body);  ***not compatible with elastislide on ipad- nav arrows clicks don't work
		// ------------------------------
		
		
		
		// ------------------------------
		// LIGHTBOX
		setupLigtbox();
		// ------------------------------
	

        
		// ------------------------------
		// CODE PRETTIFY
		if($('.prettyprint').length) {
			window.prettyPrint && prettyPrint();
		}
		// ------------------------------
		
		
		
		// ------------------------------
		// TABS
		$('.tabs').each(function() {
			if(!$(this).find('.tab-titles li a.active').length) {
				$(this).find('.tab-titles li:first-child a').addClass('active');
				$(this).find('.tab-content > div:first-child').show();
			} else {
				$(this).find('.tab-content > div').eq($(this).find('.tab-titles li a.active').parent().index()).show();	
			}
		});
		
		$('.tabs .tab-titles li a').click(function() {
			if($(this).hasClass('active')) { return; }
			$(this).parent().siblings().find('a').removeClass('active');
			$(this).addClass('active');
			$(this).parents('.tabs').find('.tab-content > div').hide().eq($(this).parent().index()).show();
			return false;
		});
		// ------------------------------
		
		
		// ------------------------------
		// TOGGLES
		var toggleSpeed = 300;
		$('.toggle h4.active + .toggle-content').show();
	
		$('.toggle h4').click(function() {
			if($(this).hasClass('active')) { 
				$(this).removeClass('active');
				$(this).next('.toggle-content').stop(true,true).slideUp(toggleSpeed);
			} else {
				
				$(this).addClass('active');
				$(this).next('.toggle-content').stop(true,true).slideDown(toggleSpeed);
				
				//accordion
				if($(this).parents('.toggle-group').hasClass('accordion')) {
					$(this).parent().siblings().find('h4').removeClass('active');
					$(this).parent().siblings().find('.toggle-content').stop(true,true).slideUp(toggleSpeed);
				}
				
			}
			return false;
		});
		// ------------------------------
		
		
		
		// ------------------------------
		// RESPONSIVE VIDEOS
		if($('.media-wrap').length) {
			$(".media-wrap").fitVids();
		}
		// ------------------------------
		
		
		
		// ------------------------------
		// UNIFORM
		$("select:not([multiple]), input:checkbox, input:radio, input:file").uniform();
		var ua = navigator.userAgent.toLowerCase();
		var isAndroid = ua.indexOf("android") > -1;
		if(isAndroid) {
			$('html').addClass('android');
		}
		// ------------------------------
		
		
		
		// ------------------------------
		/* FLEX SLIDER */
		var $flexslider = $('.flexslider');
				
		if($flexslider.length) {
		
			$flexslider.each(function(index, element) {
							
				//wait for images
				$(element).imagesLoaded( function() {
					
					//remove loading
					$(element).find('.loading').remove();
					
					//setup slider
					$(element).flexslider({ 
						smoothHeight: true,
						slideshow: $(element).attr('data-autoplay') != "false",
						slideshowSpeed: $(element).attr('data-interval'), 
						animationSpeed : $(element).attr('data-animationSpeed'),
						animation: $(element).attr('data-animation'), 
						direction : $(element).attr('data-direction'),
						directionNav : $(element).attr('data-directionNav') != "false",
						controlNav : $(element).attr('data-controlNav') != "false",
						randomize : $(element).attr('data-randomize') == "true",
						startAt : $(element).attr('data-startAt') != null ? parseInt($(element).attr('data-startAt')) : 0,
						animationLoop : $(element).attr('data-animationLoop') != "false",
						pauseOnHover : $(element).attr('data-pauseOnHover') != "false",
						reverse : $(element).attr('data-reverse') == "true",
						prevText: "",
						nextText: "",
						start: function(slider) {
								$('.slides li').click(function(event){
									slider.flexAnimate(slider.getTarget("next"));
								});
							}
						});
					
				});
			
			});
		}
		// ------------------------------
		
		
        
		// ------------------------------
		/* MEDIAELEMENT.JS - self hosted html5 video and audio player */
		if($('video,audio').length) {
			$('video,audio').mediaelementplayer({ audioHeight: 50 });	
		}
		// ------------------------------
		
        
		
		// ------------------------------
		// FORM VALIDATION
		// comment form validation fix
		$('#commentform').addClass('validate-form');
		$('#commentform').find('input,textarea').each(function(index, element) {
            if($(this).attr('aria-required') == "true") {
				$(this).addClass('required');
			}
			if($(this).attr('name') == "email") {
				$(this).addClass('email');
			}
		});
		
		// validate form
		if($('.validate-form').length) {
			$('.validate-form').each(function() {
					$(this).validate();
				});
		}
		// ------------------------------
		


		// ------------------------------
		// GOOGLE MAP
		/*
			custom map with google api
			check out the link below for more information about api usage
			https://developers.google.com/maps/documentation/javascript/examples/marker-simple
		*/
		function initializeMap() {
			if($('.map').length) {
				var mapCanvas = $('#map-canvas');
				var myLatlng = new google.maps.LatLng(mapCanvas.data("latitude"),mapCanvas.data("longitude"));
				var mapOptions = {
					zoom: mapCanvas.data("zoom"),
					center: myLatlng
				}
				var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
				
				var marker = new google.maps.Marker({
				  position: myLatlng,
				  map: map
		  	});
			}
		  
		}
		if($('.map').length) {
			google.maps.event.addDomListener(window, 'load', initializeMap);
		}
		// ------------------------------
				
		
		
		// ------------------------------
		/* jQuery Ajax Mail Send Script */	
		var contactForm = $( '#contact-form' );
		var $submit = contactForm.find('.submit');
		
		contactForm.submit(function()
		{
			if (contactForm.valid())
			{
				$submit.addClass("active loading");
				var formValues = contactForm.serialize();
				
				$.post(contactForm.attr('action'), formValues, function(data)
				{
					if ( data == 'success' )
					{
						setTimeout(function() { 
							$submit.removeClass("loading").addClass("success"); 
							contactForm.clearForm();
						},2000);
					}
					else
					{
						$submit.removeClass("loading").addClass("error");
					}
				});
			}
			
			return false
		});

		$.fn.clearForm = function() {
		  return this.each(function() {
		    var type = this.type, tag = this.tagName.toLowerCase();
		    if (tag == 'form')
		      return $(':input',this).clearForm();
		    if (type == 'text' || type == 'password' || tag == 'textarea')
		      this.value = '';
		    else if (type == 'checkbox' || type == 'radio')
		      this.checked = false;
		    else if (tag == 'select')
		      this.selectedIndex = -1;
		  });
		};
		// ------------------------------
		
		
		// ------------------------------
		// GALLERY MASONRY
		var $gallery = $('.gallery');
		if($gallery.length) {
		
			$gallery.each(function(index, element) {
							
				//wait for images
				$(element).imagesLoaded( function() {
					
					$(element).masonry();

				});
			
			});
		}
		
        // ------------------------------
		
		
		
    });
    // DOCUMENT READY
	
	
	
	// WINDOW ONLOAD
	window.onload = function() {
		
		// ------------------------------
		// MASONRY - ISOTOPE
		$masonry_container = $('.masonry');
		if($masonry_container.length) {
			//$masonry_container.imagesLoaded(function() {
				$masonry_container.width($masonry_container.parent().width());
				// initialize isotope
				$masonry_container.isotope({
				  itemSelector : '.hentry',
				  layoutMode : $masonry_container.data('layout')
				});
				
				setMasonry();
				setTimeout(function() { $masonry_container.isotope(); }, 20);	
				$(window).resize(function() {
					// hack : make container width fixed
					$masonry_container.width($masonry_container.parent().width());
					setMasonry();					
				});
				
				// filter items when filter link is clicked
				$('#filters a').click(function(){
				  var selector = $(this).attr('data-filter');
				  setMasonry();
				  $masonry_container.isotope({ filter: selector });
				  $(this).parent().addClass('current').siblings().removeClass('current');
				  return false;
				});
				
			//});
		}
		// ------------------------------	
		
	
		// ------------------------------
        // FULL WIDTH IMAGES
		fullWidthImages();
		// ------------------------------
	
	};
	// WINDOW ONLOAD	
	
	
	
	
	// ------------------------------
	// ------------------------------
		// FUNCTIONS
	// ------------------------------
	// ------------------------------
	
	
	
	// ------------------------------
	// FULL WIDTH IMAGES
	function fullWidthImages() { 
		$('.full-width-image').each(function(index, element) {
            $(element).css("min-height", $(element).find('img').height());
			$( window ).resize(function() {
			  $(element).css("min-height", $(element).find('img').height());
			});
        });
	}
	// ------------------------------
	
	
	// ------------------------------
	// PORTFOLIO MASONRY LAYOUT : changes the number of masonry columns based on the current container's width
	function setMasonry() {
		
		var itemW = $masonry_container.data('item-width');
		var containerW = $masonry_container.width();
		var items = $masonry_container.children('.hentry');
		var columns = Math.round(containerW/itemW);
	
		// set the widths (%) for each of item
		items.each(function(index, element) {
			var multiplier = $(this).hasClass('x2') && columns > 1 ? 2 : 1;
			var itemRealWidth = (Math.floor( containerW / columns ) * 100 / containerW) * multiplier ;
			$(this).css( 'width', itemRealWidth + '%' );
		});
	
		var columnWidth = Math.floor( containerW / columns );
		$masonry_container.isotope( 'option', { masonry: { columnWidth: columnWidth } } );
	}
	// ------------------------------
	
	
	
	// ------------------------------
	// LIGHTBOX
	function setupLigtbox() {	
		
		if($(".lightbox").length) {
			
			$('.media-box, .r-gallery-single').each(function(index, element) {
				var $media_box = $(this);
				$media_box.magnificPopup({
					delegate: '.lightbox', // the selector for gallery item
					gallery: {
					  enabled: $media_box.find('.lightbox').length > 1 ? true : false
					},
					type: 'image',
					iframe: {
						 markup: '<div class="mfp-iframe-scaler">'+
									'<div class="mfp-close"></div>'+
									'<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
									'<div class="mfp-title">Some caption</div>'+
								  '</div>'
					  },
					  callbacks: {
						markupParse: function(template, values, item) {
						 values.title = item.el.attr('title');
						},
				 	}
				});
				
			});
		}
	}
	// ------------------------------	
	
})(jQuery);
