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

function sbm_mega_menu_tag($menuid = 0) {
  $megadata = sbm_get_mega_item($menuid);

  if(!$megadata) return;

  $enable = filter_var($megadata['settings']['enable'], FILTER_VALIDATE_BOOLEAN);
  $extra_text_enable = filter_var($megadata['settings']['extra_content_display'], FILTER_VALIDATE_BOOLEAN);
  if($enable != true) return;
  $tabs = $megadata['tabs'];
  $extra_text_content = $megadata['settings']['extra_content'];
  ?>
  <div class="sbm-mega-menu sbm-mega-menu__parent-id-<?php echo $menuid; ?>">
    <div class="sbm-mega-menu__inner site-container <?php echo ($extra_text_enable) ? '__has-extra-text' : '' ?>">
      <div class="sbm-mega-menu__tab">
        <div class="sbm-mega-menu__tab-heading">
          <ul class="sbm-mega-menu__tab-heading-ul">
            <?php foreach($tabs as $_index => $tab) : 
              $active_class = $_index == 0 ? '__active' : '';
              $cols = $tab['settings']['columns'];
            ?>
            <li class="tab-heading-item tab-content-item__<?php echo $tab['__key'] ?> <?php echo $active_class; ?>" data-key="<?php echo $tab['__key'] ?>">
              <a class="nav-link" href="<?php echo $tab['href'] ?>" target="<?php echo $tab['target']; ?>"><?php echo $tab['name']; ?></a>
            </li>
            <?php endforeach; ?>
          </ul>
        </div>
        <div class="sbm-mega-menu__tab-content">
          <?php foreach($tabs as $_index => $tab) : 
            $active_class = $_index == 0 ? '__active' : '';  
          ?>
          <div data-key="<?php echo $tab['__key'] ?>" class="tab-content-item tab-content-item__<?php echo $tab['__key'] ?> <?php echo $active_class; ?> __columns-<?php echo $cols; ?>">
            <?php
            if($tab['children'] && count($tab['children']) > 0) {
              foreach($tab['children'] as $c_index => $c) {
              ?>
              <div class="sbm-mega-menu__children-item">
                <div class="sbm-mega-menu__children-item-inner">
                  <h4><?php echo $c['heading'] ?></h4>
                  <?php if($c['type'] == '__CUSTOM_MENU__') {
                    sbm_mega_menu_custom_type_tag($c['items']);
                  } else if($c['type'] == '__WP_MENU__') {
                    sbm_mega_menu_wpmenu_type_tag($c['menuid']);
                  } ?>
                </div>
              </div>
              <?php 
              } 
            }
            ?>
          </div>
          <?php endforeach; ?>
        </div>
      </div> <!-- .sbm-mega-menu__tab -->
      <?php if($extra_text_enable) : ?>
      <div class="sbm-mega-menu__extra-text">
        <div class="sbm-mega-menu__extra-text-inner">
          <?php echo sbm_fix_quote_html($extra_text_content); ?>
        </div>
      </div> <!-- .sbm-mega-menu__extra-text -->
      <?php endif; ?>
    </div>
  </div> <!-- .sbm-mega-menu -->
  <?php 
}

function sbm_mega_menu_custom_type_tag($items) {
  if(!$items || count($items) <= 0) return;
  ?>
  <ul class="sbm-custom-nav">
    <?php foreach($items as $_index => $i) : ?>
    <li class="sbm-custom-nav__item">
      <a href="<?php echo $i['href']; ?>" target="<?php echo $i['target']; ?>"><?php echo $i['name'] ?></a>
    </li>
    <?php endforeach; ?>
  </ul>
  <?php
}

function sbm_mega_menu_wpmenu_type_tag($menuid) {
  echo 'in development...!';
}