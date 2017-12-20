<?php
/**
 * File use to define plugin post types and its REST API endpoints
 * 
 * @package RWC_Backend
 * @since 1.0.0
 */

/**
 * Class that handles all the logic regarding post types
 * 
 * @package RWC_Backend
 * @since 1.0.0
 */
class RWC_Backend_Post_Types {

	/**
	 * Function to register all post types
	 * 
	 * @since 1.0.0
	 */
	public function register_post_types() {
		/** Post type - applicant. */
		register_post_type( 'applicant', array(
			'labels'             => array(
				'name'               => _x( 'Applicants', 'Post type general name', 'rwc-backend' ),
				'singular_name'      => _x( 'Applicant', 'Post type singular name', 'rwc-backend' ),
				'menu_name'          => _x( 'Applicants', 'Admin Menu text', 'rwc-backend' ),
				'name_admin_bar'     => _x( 'Applicant', 'Add New on Toolbar', 'rwc-backend' ),
				'add_new'            => __( 'Add New', 'rwc-backend' ),
				'add_new_item'       => __( 'Add New Applicant', 'rwc-backend' ),
				'new_item'           => __( 'New Applicant', 'rwc-backend' ),
				'edit_item'          => __( 'Edit Applicant', 'rwc-backend' ),
				'view_item'          => __( 'View Applicant', 'rwc-backend' ),
				'all_items'          => __( 'All Applicants', 'rwc-backend' ),
				'search_items'       => __( 'Search Applicants', 'rwc-backend' ),
				'parent_item_colon'  => __( 'Parent Applicants:', 'rwc-backend' ),
				'not_found'          => __( 'No applicants found.', 'rwc-backend' ),
				'not_found_in_trash' => __( 'No applicants found in Trash.', 'rwc-backend' )
			),
			'description'        => __( 'Use to store applicants information.', 'rwc-backend' ),
			'public'             => false,
			'publicly_queryable' => true,
			'show_ui'            => true,
			'show_in_menu'       => true,
			'show_in_admin_bar'  => false,
			'query_var'          => true,
			'rewrite'            => array( 'slug' => 'applicants' ),
			'capability_type'    => 'post',
			'has_archive'        => false,
			'hierarchical'       => false,
			'menu_position'      => 10,
			'menu_icon'          => 'dashicons-groups',
			'supports'           => array( 'title', 'custom-fields' ),
			'show_in_rest'       => true,
			'rest_base'          => 'applicants'
		) );
	}

	/**
	 * Modify the api response of applicant post type
	 * 
	 * @since 1.0.0
	 */
	public function register_applicants_rest_fields() {
		/** Gender -- post meta field. */
		register_rest_field( 'applicant', 'gender', array(
			'get_callback'    => array( $this, 'get_post_meta_api' ),
			'update_callback' => null,
			'schema'          => null
		) );

		/** Phone -- post meta field. */
		register_rest_field( 'applicant', 'phone', array(
			'get_callback'    => array( $this, 'get_post_meta_api' ),
			'update_callback' => null,
			'schema'          => null
		) );

		/** Email -- post meta field. */
		register_rest_field( 'applicant', 'email', array(
			'get_callback'    => array( $this, 'get_post_meta_api' ),
			'update_callback' => null,
			'schema'          => null
		) );

		/** Address -- post meta field. */
		register_rest_field( 'applicant', 'address', array(
			'get_callback'    => array( $this, 'get_post_meta_api' ),
			'update_callback' => null,
			'schema'          => null
		) );

		/** Nationality -- post meta field. */
		register_rest_field( 'applicant', 'nationality', array(
			'get_callback'    => array( $this, 'get_post_meta_api' ),
			'update_callback' => null,
			'schema'          => null
		) );

		/** Birthday -- post meta field. */
		register_rest_field( 'applicant', 'birthday', array(
			'get_callback'    => array( $this, 'get_post_meta_api' ),
			'update_callback' => null,
			'schema'          => null
		) );

		/** Education Background -- post meta field. */
		register_rest_field( 'applicant', 'education_background', array(
			'get_callback'    => array( $this, 'get_post_meta_api' ),
			'update_callback' => null,
			'schema'          => null
		) );

		/** Mode of Contact -- post meta field. */
		register_rest_field( 'applicant', 'mode_of_contact', array(
			'get_callback'    => array( $this, 'get_post_meta_api' ),
			'update_callback' => null,
			'schema'          => null
		) );
	}

	/**
	 * Callback function for getting post meta value
	 * 
	 * @since 1.0.0
	 * 
	 * @param  array $object
	 * @param  string $field_name
	 * @return string
	 */
	public function get_post_meta_api( $object, $field_name ) {
		return get_post_meta( $object['id'], $field_name, true );
	}
}
