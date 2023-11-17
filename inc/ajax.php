<?php 
/**
 * Ajax functions
 */

function sbm_ajax_all_menus() {
  wp_send_json(wp_get_nav_menus());
}

add_action('wp_ajax_sbm_ajax_all_menus', 'sbm_ajax_all_menus');
add_action('wp_ajax_nopriv_sbm_ajax_all_menus', 'sbm_ajax_all_menus');

function sbm_ajax_save_mega_data() {
  $menuid = $_POST['menuid'];
  $megaData = $_POST['megadata'];
  sbm_update_mega_item($menuid, $megaData);
  wp_send_json([
    'success' => true,
  ]);
}

add_action('wp_ajax_sbm_ajax_save_mega_data', 'sbm_ajax_save_mega_data');
add_action('wp_ajax_nopriv_sbm_ajax_save_mega_data', 'sbm_ajax_save_mega_data');

function sbm_ajax_get_mega_data() {
  $menuid = $_POST['menuid'];
  wp_send_json(sbm_get_mega_item($menuid));
}

add_action('wp_ajax_sbm_ajax_get_mega_data', 'sbm_ajax_get_mega_data');
add_action('wp_ajax_nopriv_sbm_ajax_get_mega_data', 'sbm_ajax_get_mega_data');