<?php

/* AG Default PAGE */
global $post;

get_header();



/* Content

	Parent Menu Sidebar
	*/

	$catContext = array('nav' => get_children( array(
			'post_parent' 		=> $post->post_parent
			,'post_type'		=> 'page'
		)));
	$context['sidebarmenu'] = Timber::compile('/views/components/nav.html.twig');
	/*
	Project Wall
	*/
	$projectArgs = array(
		"post_type" 		=> ( 'team' ) ,
		"posts_per_page"	=>	'-1'
	);
	$context[ 'project_wall' ] = Timber::get_posts($projectArgs); 
	$context[ 'project_wall' ] = array(
									'tiles'=>$context['project_wall']
									,'slide_template'=>'/views/content/team_tile.html.twig'
								);
	$context[ 'project_wall' ] = Timber::compile('/views/components/flip_tile_wall.html.twig', $context['project_wall']);

	//Credo
	$workArgs = new TimberPost('work-with-us');
	$workContext = array('content' => $workArgs );
	$context['work'] = Timber::compile('/views/content/page_block.html.twig', $workContext);
	//Credo
	$collaborateArgs = new TimberPost('collaborate-with-us');
	$collaborateContext = array('content' => $collaborateArgs );
	$context['collaborate'] = Timber::compile('/views/content/page_block.html.twig', $collaborateContext);

	Timber::render('/views/pages/team.html.twig', $context);


get_footer();

/* Content

	Team wall


	Work With us Block
	Collaborate With us Block

*/

get_footer();