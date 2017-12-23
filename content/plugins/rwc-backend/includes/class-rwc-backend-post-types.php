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
		register_post_type(
			'applicant', array(
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
					'not_found_in_trash' => __( 'No applicants found in Trash.', 'rwc-backend' ),
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
				'rest_base'          => 'applicants',
			)
		);
	}

	/**
	 * Modify the api response of applicant post type
	 *
	 * @since 1.0.0
	 */
	public function register_applicants_rest_fields() {
		$rest_fields = array(
			array( 'attribute' => 'first_name' ),
			array( 'attribute' => 'last_name' ),
			array( 'attribute' => 'nationality' ),
			array( 'attribute' => 'gender' ),
			array( 'attribute' => 'phone' ),
			array( 'attribute' => 'birthday' ),
			array( 'attribute' => 'country' ),
			array( 'attribute' => 'address' ),
			array( 'attribute' => 'state' ),
			array( 'attribute' => 'city' ),
			array( 'attribute' => 'zip' ),
			array( 'attribute' => 'education_background' ),
			array( 'attribute' => 'mode_of_contact' ),
		);

		$rest_fields[] = array(
			'attribute' => 'email',
			'args'      => array(
				'update_callback' => array( $this, 'update_post_meta_email' ),
			),
		);

		foreach ( $rest_fields as $key => $field ) {
			$this->do_register_rest_field( 'applicant', $field );
		}
	}

	/**
	 * Use to register rest field with default callback
	 *
	 * @param  string $object_type Post type where to register the field.
	 * @param  array  $field       Combined field attributes.
	 */
	public function do_register_rest_field( $object_type, $field = array() ) {
		if ( ! isset( $field['args'] ) || empty( $field['args'] ) ) {
			$field['args'] = array();
		}

		$defaults = array(
			'get_callback'    => array( $this, 'get_post_meta_api' ),
			'update_callback' => array( $this, 'update_post_meta_text' ),
			'schema'          => null,
		);

		$args = $field['args'];
		$args = wp_parse_args( $args, $defaults );

		register_rest_field( $object_type, $field['attribute'], $args );
	}

	/**
	 * Callback function for getting post meta value
	 *
	 * @since 1.0.0
	 *
	 * @param  array  $object     Object where to store meta.
	 * @param  string $field_name Specific meta field where to store the value.
	 *
	 * @return string
	 */
	public function get_post_meta_api( $object, $field_name ) {
		return get_post_meta( $object['id'], $field_name, true );
	}

	/**
	 * Handler for updating text field
	 *
	 * Basically we use this as the common way to save data to
	 * our post types.
	 *
	 * @since 1.0.0
	 *
	 * @param mixed  $value      The value to store.
	 * @param object $object     Object where to store meta.
	 * @param string $field_name Specific meta field where to store the value.
	 *
	 * @return bool|int
	 */
	public function update_post_meta_text( $value, $object, $field_name ) {
		return update_post_meta( $object->ID, $field_name, sanitize_text_field( $value ) );
	}

	/**
	 * Handler for updating email field
	 *
	 * @since 1.0.0
	 *
	 * @param mixed  $value      The value to store.
	 * @param object $object     Object where to store meta.
	 * @param string $field_name Specific meta field where to store the value.
	 *
	 * @return bool|int
	 */
	public function update_post_meta_email( $value, $object, $field_name ) {
		return update_post_meta( $object->ID, $field_name, sanitize_email( $value ) );
	}
}
