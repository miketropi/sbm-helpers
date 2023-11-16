<?php 
/**
 * Template tags
 */

function sbm_brand_image_tag() {
  ?>
  <a class="brand-image-link" href="<?php get_site_url(); ?>">
    <img 
      src="<?php echo get_field('brand_image', 'option') ?>" 
      alt="<?php echo get_bloginfo( 'name' ); ?>">
  </a> <!-- .brand-image -->
  <?php
}

function sbm_header_action_buttons_tag() {
  $buttons = apply_filters('SBM_HELPERS/HEADER_ACTION_BUTTONS', [
    [
      'link' => 'tel:' . get_field('phone', 'option'),
      'label' => get_field('phone', 'option') ? get_field('phone', 'option') : '',
      'classes' => '__phone',
    ],
    [
      'link' => 'mailto:' . get_field('email', 'option'),
      'label' => get_field('email', 'option') ? get_field('email', 'option') : '',
      'classes' => '__email',
    ],
    [
      'link' => get_field('facebook', 'option'),
      'label' => get_field('facebook', 'option') ? 'Facebook' : '',
      'classes' => '__fb',
    ],
  ]);
  ?>
  <ul class="action-buttons-list">
    <?php foreach($buttons as $index => $b) : 
      if(empty($b['label'])) continue;  
    ?>
    <li class="__item <?php echo (isset($b['classes']) ? $b['classes'] : '') ?>">
      <a href="<?php echo $b['link'] ?>"><?php echo $b['label'] ?></a>
    </li>
    <?php endforeach; ?>
  </ul> <!-- .action-buttons-list -->
  <?php
}