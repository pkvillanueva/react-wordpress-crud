<?php
/**
 * The main template file
 *
 * @package RWC_Frontend
 */

get_header(); ?>

	<noscript><?php esc_html_e( 'You need to enable JavaScript to run this app.', 'rwc-frontend' ); ?></noscript>

	<div id="root" class="site__root"></div><!-- #root -->

<?php
get_footer();
