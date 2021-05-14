(function ($) {

	new WOW().init();

	//jQuery to collapse the navbar on scroll
	$(window).scroll(function() {
		if ($(".navbar").offset().top > 50) {
			$(".navbar-fixed-top").addClass("top-nav-collapse");
		} else {
			$(".navbar-fixed-top").removeClass("top-nav-collapse");
		}
	});
  
  	$(window).load(function() {
       
       
       $('#holder').children().hide();                      
        $('#holder').children().slice(0,9).fadeIn(1000);  
        
        
    });
    

  //function for filtering products
            $(document).ready(function () {
        $('#filterOptions li a').click(function () {
        var ourClass = $(this).attr('class');
        var isAll = $('#showAll a').attr('class');
        
        $('#filterOptions li').removeClass('active');
         $(this).parent().addClass('active');

        if (ourClass == 'all' && isAll!="active") {          
            $('#holder').children().hide();                      
            $('#holder').children().slice(0,9).fadeIn(1000);
            
            
        } else if (ourClass == 'all' && isAll=="active") {          
            $('#holder').children().hide();                     
            $('#holder').children().fadeIn(1000); 
             
                  
        } 
            
        else {
               if (isAll!="active") {            
                $('#holder').children().hide();
                $('#holder').children('div.' + ourClass).slice(0,9).fadeIn(1000); 
             } else {
                $('#holder').children().hide();
                $('#holder').children('div.' + ourClass).fadeIn(1000); 
             }
        }   

        return false;
    });
});


    $(document).ready(function () {
        $('a#showAll').click(function () {
            $('#holder').children().hide();
            $('#holder').children().fadeIn(1000);

            $('a#showAll').addClass('hide').removeClass('active');
            $('a#hideAll').removeClass('hide').addClass('active');

            return false;
        });
    });


    $(document).ready(function () {
        $('a#hideAll').click(function () {
            $('#holder').children().hide();
            $('#holder').children().slice(0, 9).fadeIn(1000);

            $('a#hideAll').addClass('hide').removeClass('active');
            $('a#showAll').removeClass('hide').addClass('active');

            return false;
        });
    });


$('#videoModal').on('hidden.bs.modal', function () {
        callPlayer('yt-player', 'stopVideo');
    });
    
    
  function initialize() {
        var mapCanvas = document.getElementById('map_canvas');
        var myLatlng = new google.maps.LatLng(49.9406, 17.9045);
        var office = new google.maps.LatLng(49.9413, 17.9030);
        var mapOptions = {
          center: new google.maps.LatLng(49.9410, 17.9037),
          zoom: 16,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          scrollwheel: false
        }
        var map = new google.maps.Map(mapCanvas, mapOptions)
        var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'OPEN AGENCY s.r.o. - Solná 45/19'
  });
  
   var marker2 = new google.maps.Marker({
      position: office,
      map: map,
      title: 'Kanceláře - Pekařská 408/21'
  });
        
      }
      google.maps.event.addDomListener(window, 'load', initialize);  




	//jQuery for page scrolling feature - requires jQuery Easing plugin
	$(function() {
		$('.navbar-nav li a').bind('click', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 1500, 'easeInOutExpo');
			event.preventDefault();
		});
		$('.page-scroll a').bind('click', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 1500, 'easeInOutExpo');
			event.preventDefault();
		});
	});
  
   $(document).ready(function () {
          $('.materialsButton').click(function () {
               $('#materialy a').click();
               $('.productsClick').click();
               return false
          });
          
          });
          
    $(document).ready(function () {
          $('.teachersButton').click(function () {
               $('#ucitele a').click();
               $('.productsClick').click();
               return false
          });
          
          }); 
          
     $(document).ready(function () {
          $('.teachingButton').click(function () {
               $('#vyuka a').click();
               $('.productsClick').click();
               return false
          });
          
          });   
          
                    

})(jQuery);


