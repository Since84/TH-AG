// Peek Slider JS

(function($){
	
	var PeekSlider = Backbone.View.extend({
		el: '.peek-slider',

		defaults: {
			speed: 500,
			slide_class: ".window .slide"
		},

		events: {
			'click .next-button': 'goNext'
			,'click .prev-button': 'goPrev'
		},

		initialize: function(){
			this.createGallery();
		}
		,createGallery: function(){
			this.defaults.active = $(this.defaults.slide_class).first();
			this.defaults.active.addClass('active');

			this.defaults.next 	= this.defaults.active.next();
			this.defaults.next.addClass('next');

			this.defaults.prev 	= $(this.defaults.slide_class).last();
			this.defaults.prev.addClass('prev');

		}
		,goNext: function(){
			//Strip Classes
			this.defaults.next.removeClass('next');	
			this.defaults.active.removeClass('active');
			this.defaults.prev.removeClass('prev');

			// Reassign Positions
			this.defaults.prev 		= this.defaults.active;
			this.defaults.active 	= this.defaults.next;
			this.defaults.next 		= ( this.defaults.active.next().length != 0 )
										? this.defaults.active.next()
										: $(this.defaults.slide_class).first();

			// Add Classes
			this.defaults.next.addClass('next');	
			this.defaults.active.addClass('active');
			this.defaults.prev.addClass('prev');

			//Over 3 Slides

		}
		,goPrev: function(){
			this.defaults.prev.removeClass('prev');	
			this.defaults.active.removeClass('active');
			this.defaults.next.removeClass('next');

			// Reassign Position
			this.defaults.next 		= this.defaults.active;
			this.defaults.active 	= this.defaults.prev;
			this.defaults.prev 		= ( this.defaults.active.prev().length != 0 )
										? this.defaults.active.prev()
										: $(this.defaults.slide_class).last();
				
			// Add Classes
			this.defaults.next.addClass('next');	
			this.defaults.active.addClass('active');
			this.defaults.prev.addClass('prev');
		}

	});

	$(document).ready(function(){
			var Slider = new PeekSlider;
	})

})(jQuery);