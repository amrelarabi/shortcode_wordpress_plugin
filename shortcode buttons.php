<?php

/*
Plugin Name: shortcode buttons
Plugin URI: http:www.amrelarbi.com
Description: Adds a button set to visual editor.
Author: Amr Elarabi
*/

// the button "add theme shortcodes"
function add_media_button_wizard()
{
    echo '<button type="button" id="insert-shortcode-button" class="button add_media"><span class="wp-media-buttons-icon"></span> Add Theme Shortcodes</button>';
	
?>
<div id="shortcodes_panel" class="media-modal wp-core-ui" title="Shortcode Panel">
	<button type="button" class="button-link media-modal-close"><span class="media-modal-icon"><span class="screen-reader-text">إغلاق لوحة الوسائط</span></span></button>
	<div class="shortcode-frame-title">
	<h1> Theme Shortcodes </h1>
	</div>

	<div class="shortcode-frame-content">
		<div id="shortcode_buttons">
			<button id="slider_sc_btn"> <span class="dashicons dashicons-format-gallery"></span> slider</button>
			<button id="newsbar_sc_btn"><span class="dashicons dashicons-leftright"></span>newsbar</button>
		</div>	
	</div>

	<button type="button" class="button media-button button-primary button-large media-button-insert" id="insert_shortcode" style="display:none">Insert Shortcode</button>
</div>
<?php	
}
add_action('media_buttons', 'add_media_button_wizard', 12);

// the windows javascript
function include_media_button_js_file() {
	// add stylesheet file
	wp_register_style( 'panal_style', plugin_dir_url(__FILE__) .'style.css' );
	wp_enqueue_style('panal_style');
	
	// add jquery script file
	/*wp_register_script( 'media_button', plugin_dir_url(__FILE__) .'media_button.js' , array( 'jquery' ), '1.0.0', true);
	wp_enqueue_script('media_button');*/
}
//admin_enqueue_scripts
add_action('wp_enqueue_media', 'include_media_button_js_file');

$categories = get_categories(array('hide_empty'   => false));

foreach($categories as $cat){
	$cat_name[] = $cat->cat_name;
	$cat_ID[] = $cat->cat_ID;
}

// Register the script
wp_register_script('media_button', plugin_dir_url(__FILE__) .'media_button.js');
// Localize the script with new data
$translation_array = array(
	'cat_name'=> $cat_name ,
	'cat_ID'=> $cat_ID
);
wp_localize_script( 'media_button', 'arr', $translation_array );

// Enqueued script with localized data.
wp_enqueue_script( 'media_button' );

/* Shortcodes plugins */

//[newsbar]
function newsbar( $atts ){
	shortcode_atts( array(
        'order_by' => 'latest',
        'posts_number' => '5',
        'categories' => '1',
        'animation' => 'slide',
        'speed' => '300',
    ), $atts );
	newsbarView($atts);
}
add_shortcode( 'newsbar', 'newsbar' );