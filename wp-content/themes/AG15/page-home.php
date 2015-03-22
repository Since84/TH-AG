<?php
	/* AG Home Page */

	get_header();
	$context = Timber::get_context();

	/* Featured Content 

		Slider with:
		Gallery
		Project Wall
		Image 
		Video
*/

		$galleryArgs = array(
			"post_type" 		=> ( 'dynamite-slide' ) ,
			"posts_per_page"	=>	'8'
		);
		$gallerySlideContext[ 'feed' ] = Timber::get_posts($galleryArgs); 
		$gallerySlideContext['spark_class'] = 'home-feature';
		$gallerySlideContext[ 'slide_template' ] = '/views/content/project_slide.html.twig';
		$context['gallery_slide'] = Timber::render('/views/components/static_feed.html.twig', $gallerySlideContext);


	/* Content

		Column 1.
		Credo
		Testimonial
		Formula for Success

		Column 2. 
		Contact Form
		Blog Roll

	*/
	

	get_footer();
