<?php 
/**
 * Static
 */

add_action('wp_enqueue_scripts', 'sbm_helpers_enqueue_scripts');

function sbm_helpers_enqueue_scripts() {
  wp_enqueue_style('sbm-helpers-css', SBM_URI . '/dist/css/smb-helpers.bundle.css', false, SBM_VERSION);
  wp_enqueue_script('sbm-helpers-js', SBM_URI . '/dist/smb-helpers.bundle.js', ['jquery'], SBM_VERSION, true);

  wp_localize_script('sbm-helpers-js', 'SBP_PHP_DATA', [
    'ajax_url' => admin_url('admin-ajax.php'),
    'lang' => []
  ]);

  wp_add_inline_style('sbm-helpers-css', sbm_helpers_css_variables_register());
} 

function sbm_helpers_css_variables_register() {
  ob_start();
  ?>
  :root {
    --sbm-content-width: <?php echo get_field('content_width', 'option'); ?>;
    --sbm-spacing-lr: <?php echo get_field('spacing_left__right_of_content', 'option'); ?>;
    --sbm-accent-color: <?php echo get_field('accent_color', 'option'); ?>;
  }
  <?php
  return ob_get_clean();
}

add_action('admin_enqueue_scripts', 'sbm_helpers_admin_enqueue_scripts');

function sbm_helpers_admin_enqueue_scripts() {
  wp_enqueue_style('sbm-helpers-admin-css', SBM_URI . '/dist/css/smb-helpers-admin.bundle.css', false, SBM_VERSION);
  wp_enqueue_script('sbm-helpers-admin-js', SBM_URI . '/dist/smb-helpers-admin.bundle.js', ['jquery'], SBM_VERSION, true);
}