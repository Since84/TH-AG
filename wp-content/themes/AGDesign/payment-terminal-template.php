<?php 
/* Template Name: Payment Portal */
if ( have_posts() ) : while ( have_posts() ) : the_post();
?>
<?php Starkers_Utilities::get_template_parts( array( 'parts/shared/html-header', 'parts/shared/header' ) ); ?>
<?php Starkers_Utilities::get_template_parts( array( 'parts/shared/iframe' ) ); ?>
<?php Starkers_Utilities::get_template_parts( array( 'parts/shared/footer','parts/shared/html-footer' ) ); ?>

<? 
endwhile; endif;