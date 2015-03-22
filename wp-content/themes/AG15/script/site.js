// Spark Backbone JS application

(function($){

// Spark Application
  var AppView = Backbone.View.extend({
  		el: 'body',

  		// Default Variables for Application
  		defaults: function() {
  			return {
  			}
  		},

  		//Delegated Events for user actions
  		events: {
      		"click .mobile-btn": "doSidr",
          "click .project.box:not(.open)": "openProject",
          "click .project .close": "closeProject",
          "click .project .project-pager li.next": "nextProject",
          "click .project .project-pager li.prev": "prevProject"
  		},


  		//Initialization function
  		initialize: function(){
        this.doSidr();
        this.doIsotope();
  		},

  		doSidr: function(){
        $('.mobile-btn').sidr({
          name: 'sidr-main',
          source: 'header nav',
          side: 'right',
          body: 'html'
        });
  		},
      doIsotope: function(){
          $('.flip-tile-wall').imagesLoaded(function(){
            // $('.flip-tile-wall').isotope({
            //   itemSelector: '.flip-card'
            // })
          })
      },
      openProject: function(e, elem) {
        var self = this
            ,$elem = elem ? elem : $( e.currentTarget )
            ,id = $elem.data('id')
            ,filter = '.'+id;

        if( $elem.is('.loaded') ){
            $elem
              .addClass('open')
              .siblings('.open')
              .each(function(){
                $(this).removeClass('open');
              });
              // $('.tile-browser .tile-container').isotope({ filter:filter });
              $('.tile-browser .tile-container').isotope('destroy');
        }else{
          var data = {
            action: 'project_detail',
            projectId: $elem.attr('data-id')
          };
          $elem.addClass('loading');
          $.post(ajaxurl, data, function(template) {
              //Load Template if not Loaded
              if( $elem.find('.profile').is(':empty') )
                $elem.find('.profile').append( template );

              //Open Project and Close Other Project
              $elem.removeClass('loading').addClass('loaded open');

              // $('.tile-browser .tile-container').isotope({ filter:filter });
              $('.tile-browser .tile-container').isotope('destroy');
              $('.tile-browser .tile-container').cycle({
                  slideClass: '.project.box'
              });
              $elem.siblings('.open').each(function(){
                $(this).removeClass('open');
              });
              $elem.find('.cycle-slideshow').imagesLoaded(function(){
                $(this).cycle();
              })
          });
        }
      },
      nextProject: function(e){
          var self  = this,
          $elem = $( e.currentTarget ).parents('.project.box');
          if ( $elem.next().length > 0 ) {
              self.openProject(false, $elem.next());
          }
      },
      prevProject: function(e){
          var self  = this,
          $elem = $( e.currentTarget ).parents('.project.box');
          if ( $elem.prev().length > 0 ) {
              self.openProject(false, $elem.next());
          }
      },
      closeProject: function(e,elem){
        var self = this
            ,$elem = elem ? elem : $( e.currentTarget ).parents('.project.box')
            ,id = $elem.data('id')
            ,filter = '.'+id;

            $elem.removeClass('open');
            $('.tile-browser .tile-container').isotope({ filter:'*' });
      }
  });


  $(document).ready(function(){
  		var App = new AppView;
  })
  

})(jQuery);