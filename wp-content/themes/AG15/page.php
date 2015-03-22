<?php

/* AG HOME PAGE */

get_header();
$context = Timber::get_context();
$context['post'] = new TimberPost();

Timber::render('views/pages/page.html.twig', $context);