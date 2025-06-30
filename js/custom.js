(function ($) {

    "use strict";

        // PRE LOADER
        $(window).load(function(){
          $('.preloader').fadeOut(1000); // set duration in brackets    
        });


        // navigation Section
        $('.navbar-collapse a').on('click',function(){
          $(".navbar-collapse").collapse('hide');
        });


        // Parallax Js
        function initParallax() {
          $('#home').parallax("50%", 50);
          $('#service').parallax("50%", 40);
          $('#about').parallax("50%", 20);
          $('#work').parallax("50%", 30);
          $('#contact').parallax("50%", 10);
          }
        initParallax();
        

        // smoothscroll js
        $(function() {
          $('#home a').bind('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 49
            }, 1000);
            event.preventDefault();
          });
        });  


        // WOW Animation js
        new WOW({ mobile: false }).init();

})(jQuery);

// Enhanced custom.js with additional interactive features

$(document).ready(function() {
    
    // Initialize WOW.js for scroll animations
    new WOW().init();
    
    // Smooth scrolling for navigation links
    $('.smoothScroll').on('click', function(e) {
        e.preventDefault();
        var target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top - 70
        }, 1000);
    });
    
    // Enhanced preloader
    $(window).on('load', function() {
        $('.preloader').fadeOut('slow');
    });
    
    // Parallax effect for background images
    $(window).scroll(function() {
        var scrolled = $(this).scrollTop();
        $('.parallax-section').css('transform', 'translateY(' + (scrolled * 0.5) + 'px)');
    });
    
    // Enhanced hover effects for timeline items
    $('.timeline-content').hover(
        function() {
            $(this).addClass('timeline-hover');
        },
        function() {
            $(this).removeClass('timeline-hover');
        }
    );
    
    // Typing animation for the main heading
    function typeWriter(element, text, speed = 100) {
        let i = 0;
        element.html('');
        function type() {
            if (i < text.length) {
                element.html(element.html() + text.charAt(i));
                i++;
                setTimeout(type, speed);
            }
        }
        type();
    }
    
    // Initialize typing animation when page loads
    setTimeout(function() {
        typeWriter($('.home-thumb h1'), 'Hello, I am Yash!');
    }, 1000);
    
    // Enhanced social icon animations
    $('.social-icon li a').hover(
        function() {
            $(this).addClass('social-hover');
        },
        function() {
            $(this).removeClass('social-hover');
        }
    );
    
    // Scroll-triggered animations
    $(window).scroll(function() {
        var scrollTop = $(this).scrollTop();
        var windowHeight = $(this).height();
        
        $('.wow').each(function() {
            var elementTop = $(this).offset().top;
            if (scrollTop + windowHeight > elementTop) {
                $(this).addClass('animated');
            }
        });
    });
    
    // Enhanced button click effects
    $('.section-btn, .btn-custom').on('click', function() {
        $(this).addClass('btn-clicked');
        setTimeout(function() {
            $('.btn-clicked').removeClass('btn-clicked');
        }, 200);
    });
    
    // Mobile menu toggle (if you add a mobile menu later)
    $('.mobile-menu-toggle').on('click', function() {
        $('.mobile-menu').toggleClass('active');
    });
    
    // Enhanced form validation and submission
    $('#contact-form').on('submit', function(e) {
        e.preventDefault();
        
        // Add loading state
        var submitBtn = $(this).find('button[type="submit"]');
        var originalText = submitBtn.text();
        submitBtn.text('Sending...').prop('disabled', true);
        
        // Simulate form submission (replace with actual form handling)
        setTimeout(function() {
            submitBtn.text('Message Sent!').addClass('success');
            setTimeout(function() {
                submitBtn.text(originalText).removeClass('success').prop('disabled', false);
            }, 2000);
        }, 1500);
    });
    
    // Enhanced scroll progress indicator
    $(window).scroll(function() {
        var scrollTop = $(this).scrollTop();
        var docHeight = $(document).height() - $(window).height();
        var scrollPercent = (scrollTop / docHeight) * 100;
        
        // Create progress bar if it doesn't exist
        if ($('.scroll-progress').length === 0) {
            $('body').append('<div class="scroll-progress"></div>');
        }
        
        $('.scroll-progress').css('width', scrollPercent + '%');
    });
    
    // Enhanced image lazy loading
    $('img').each(function() {
        $(this).attr('loading', 'lazy');
    });
    
    // Enhanced accessibility features
    $('a, button').on('focus', function() {
        $(this).addClass('focused');
    }).on('blur', function() {
        $(this).removeClass('focused');
    });
    
    // Enhanced mobile touch interactions
    if ('ontouchstart' in window) {
        $('.service-thumb, .timeline-content').on('touchstart', function() {
            $(this).addClass('touch-active');
        }).on('touchend', function() {
            $(this).removeClass('touch-active');
        });
    }
    
    // Performance optimization: Debounce scroll events
    function debounce(func, wait, immediate) {
        var timeout;
        return function() {
            var context = this, args = arguments;
            var later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    }
    
    // Apply debouncing to scroll events
    $(window).scroll(debounce(function() {
        // Scroll-triggered animations
        var scrollTop = $(this).scrollTop();
        var windowHeight = $(this).height();
        
        $('.wow').each(function() {
            var elementTop = $(this).offset().top;
            if (scrollTop + windowHeight > elementTop) {
                $(this).addClass('animated');
            }
        });
    }, 10));
    
    // Enhanced error handling
    $(window).on('error', function(e) {
        console.log('Page error:', e);
    });
    
    // Enhanced analytics tracking (if needed)
    $('a[target="_blank"]').on('click', function() {
        // Track external link clicks
        console.log('External link clicked:', $(this).attr('href'));
    });
    
    // Enhanced mobile detection
    function isMobile() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }
    
    if (isMobile()) {
        $('body').addClass('mobile-device');
        // Disable parallax on mobile for better performance
        $('.parallax-section').css('background-attachment', 'scroll');
    }
    
    // Enhanced loading performance
    $(document).ready(function() {
        // Preload critical images
        var criticalImages = ['images/homebg.jpeg'];
        criticalImages.forEach(function(src) {
            var img = new Image();
            img.src = src;
        });
    });
    
    // Enhanced SEO and accessibility
    $('img').each(function() {
        if (!$(this).attr('alt')) {
            $(this).attr('alt', 'Yash Verma - ' + $(this).attr('src').split('/').pop().split('.')[0]);
        }
    });
    
    // Enhanced keyboard navigation
    $(document).on('keydown', function(e) {
        if (e.key === 'Escape') {
            $('.mobile-menu').removeClass('active');
        }
    });
    
    // Enhanced print styles
    if (window.matchMedia) {
        var mediaQueryList = window.matchMedia('print');
        mediaQueryList.addListener(function(mql) {
            if (mql.matches) {
                $('body').addClass('printing');
            } else {
                $('body').removeClass('printing');
            }
        });
    }
    
    // Enhanced error recovery
    $(window).on('beforeunload', function() {
        // Clean up any ongoing animations or processes
        $('.preloader').hide();
    });
    
    console.log('Enhanced custom.js loaded successfully!');
});
