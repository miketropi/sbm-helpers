<?php 
/**
 * hoosk
 */

add_filter('sbm_mega_walker_nav_menu_start_el', 'sbm_mega_menu_start_el', 20, 4);

function sbm_mega_menu_start_el($item_output, $menu_item, $depth, $args) {
  if($depth != 0) return $item_output;

  ob_start();
  sbm_mega_menu_tag($menu_item->ID);
  $megamenu_content = ob_get_clean();

  return $item_output . $megamenu_content;
}

add_filter('nav_menu_item_attributes', 'sbm_megamenu_nav_menu_link_attributes', 20 , 4);

function sbm_megamenu_nav_menu_link_attributes($atts, $menu_item, $args, $depth) {
  if($depth != 0) return $atts;

  $megadata = sbm_get_mega_item($menu_item->ID);
  if(!$megadata) return $atts;
  $enable = filter_var($megadata['settings']['enable'], FILTER_VALIDATE_BOOLEAN);

  if($enable) {
    $atts['class'] .= ' __sbm-has-megamenu';
  }

  return $atts;
}

add_filter('SBM_HELPERS/HEADER_ACTION_BUTTONS', 'sbm_header_button_cta');

function sbm_header_button_cta($buttons) {
  $cta = get_field('button_call_to_action', 'option');
  $buttons[] = [
    'link' => $cta['button_link'],
    'label' => $cta['button_text'],
    'classes' => '__cta',
  ];

  return $buttons;
}