// Peek Slider JS

(function($){
	
	var PeekSlider = Backbone.View.extend({
		el: '.tile-browser',

		defaults: {
			tileEl: ".tile-browser > .tile-container"
		},

		events: {
			'click .filter' : 'doFilter',
			'click .fullscreen' : 'toggleFullscreen'
		},

		initialize: function(){
			var self = this;
			self.initIsotope();
			$(window).on('resize', function(){ self.reLayoutIsotope() });
		},
		initIsotope: function(){
			$(this.defaults.tileEl).isotope({
				itemSelector: 	".box"
				,layoutMode: 	"masonry"
			})
		},
		reLayoutIsotope: function(){
			$(this.defaults.tileEl).isotope('reLayout');
		},
		doFilter: function(e){
			var target = $(e.currentTarget).data('filter');
			var elem = ( target == "*" ) 
						? target
						: '.' + target;
			$(this.defaults.tileEl).isotope({filter:elem})

			$(e.currentTarget).addClass('active')
					.siblings().removeClass('active');

		},
		toggleFullscreen: function(){
			var self = this;
			$('body').toggleClass('fullscreen-browser');
			setTimeout(function(){
				$(self.defaults.tileEl).isotope('reLayout');
			}, 500);
		}
	});

	$(document).ready(function(){
			var Slider = new PeekSlider;
	})

})(jQuery);