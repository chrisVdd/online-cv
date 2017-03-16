;(function($) {
  "use strict";

   $(document).ready(function(){
/*----------------------------- Navigations --------------------------*/
//Navigation For Index1
  $('#open-nav ').click(function () {
      if ($(this).hasClass('fa fa-bars')) {
          $(this).removeClass('fa fa-bars').addClass('fa fa-times');
          $('#navs').addClass('open-navs').slideDown('.navone');
          $(this).removeClass('nav-half').addClass('nav-full');
          $('.nav-menu').show();
      } else {
          $(this).removeClass('fa fa-times').addClass('fa fa-bars');
          $(this).removeClass('nav-full').addClass('nav-half');
          $('#navs').removeClass('open-navs').slideUp('.navone');
          $('.nav-menu').hide();
      }
  });

//Responsive Nav
  $( "ul.sub-menu").parent().append("<span class='toggle_nav_button'>+</span>");
    $(".toggle_nav_button").click(
          function(){
            var link = $(this);
            $(this).parent().find("ul.sub-menu").slideToggle('fast', function(){
              if ($(this).is(':visible')){
                link.text('-');
              } else {
                link.text('+');
              }
      });
      return false;
  });  


//Responsive Nav
  $('.nav a.colapse-menu1').click(function () { $(".navbar-collapse").collapse("hide") });
  $('body').on('touchstart.dropdown', '.dropdown-menu', function (e) { e.stopPropagation(); });

 /*----------------------------- Scroll To Top--------------------------*/
             var scrollTimeout;
            
            $('a.scroll-top').click(function(){
                $('html,body').animate({scrollTop:0},500);
                return false;
            });

            $(window).scroll(function(){
                clearTimeout(scrollTimeout);
                if($(window).scrollTop()>400){
                    scrollTimeout = setTimeout(function(){$('a.scroll-top:hidden').fadeIn()},100);
                }
                else{
                    scrollTimeout = setTimeout(function(){$('a.scroll-top:visible').fadeOut()},100);    
            }
            });

/*----------------------------- Tooltip--------------------------*/
  $( 'body' ).tooltip({
        selector: "a[data-toggle=tooltip]"
  });

/*----------------------------- Skill Chart --------------------------*/
  $('.chart').easyPieChart({
        animate: 2000,
        lineWidth: 13,
        barColor: '#1abb9b',
        trackColor: '#e6e8ed',
        lineCap: 'round',
        scaleColor: false,
        size: 170
  });

/*----------------------------- Animated Counter --------------------------*/
  $('.count').each(function () {
    $(".total-numbers .sum").appear(function() {
    var counter = $(this).html();
    $(this).countTo({
      from: 0,
      to: counter,
      speed: 2000,
      refreshInterval: 60,
      });
    });
  });

/*----------------------------- Contact Form --------------------------*/
     $('#submit').formValidator({
        scope: '#form'
      });
      
      $('#post-commentsss').formValidator({
        scope: '#comments-form'
      });
      
      $('#submit,#post-commentsss').click(function() {
            $('input.error-input, textarea.error-input').delay(300).animate({marginLeft:0},100).animate({marginLeft:10},100).animate({marginLeft:0},100).animate({marginLeft:10},100);
        });

      // Form plugin

      var options = {

        beforeSubmit: function() {
          $('.sending').show();

        },
        success: function() {
          $('.sending').hide();
          $('#form').hide();
          $(".mess").append('<h5>Merci !</h5><h5>Votre message a bien été envoyé.</h5>');
          $('.mess').delay(3000).fadeOut(function() {

            $('#form').clearForm();
            $('#form').delay(3500).show();

          });
        }
      };
      

      $('#form').submit(function() {
        $(this).ajaxSubmit(options);
        return false;
      });   

   });

    $(window).load(function(){

        /*----------------------------- Blog Carousel --------------------------*/
        $("#blog-carousel").owlCarousel({
            autoPlay: 3000,
            navigation : true, // Show next and prev buttons
            slideSpeed : 300,
            paginationSpeed : 400,
            singleItem:true,
            autoHeight: true
        });

/*----------------------------- Isotop Portfolio --------------------------*/
    $(function(){
        var $container = $('.portfolio-container');
                  $container.isotope({
                    itemSelector : '.mt',
                    layoutMode : 'masonry'
                  });
        
        var $optionSets = $('#options .option-set'),
            $optionLinks = $optionSets.find('a');

        $optionLinks.click(function(){
          var $this = $(this);
          // don't proceed if already selected
          if ( $this.hasClass('selected') ) {
            return false;
          }
          var $optionSet = $this.parents('.option-set');
          $optionSet.find('.selected').removeClass('selected');
          $this.addClass('selected');
    
          // make option object dynamically, i.e. { filter: '.my-filter-class' }
          var options = {},
              key = $optionSet.attr('data-option-key'),
              value = $this.attr('data-option-value');
          // parse 'false' as false boolean
          value = value === 'false' ? false : value;
          options[ key ] = value;
          if ( key === 'layoutMode' && typeof changeLayoutMode === 'function' ) {
            // changes in layout modes need extra logic
            changeLayoutMode( $this, options )
          } else {
            // otherwise, apply new options
            $container.isotope( options );
          }
          
          return false;
        });
      });
    });
})(jQuery);