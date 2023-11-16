/**
 * Mega menu build config backend
 */

;((w, $) => {
  'use strict';

  const addButtonOpenConfig = () => {
    const $menuEdit = $('#menu-to-edit'); 
    if($menuEdit.length <= 0) return;
    const $liItem = $menuEdit.find('.menu-item-depth-0');

    $liItem.each(function() {
      let $li = $(this);
      let menuID = $li.find('.menu-item-checkbox').data('menu-item-id');
      let $btnConfig = $li.find('button.sbm-megamenu-config');
      
      if($btnConfig.length > 0) return;
      $li.find('label.item-title').append(`<button class="sbm-megamenu-config" data-menu-id="${ menuID }">Megamenu Config</button>`);
    })
  }

  const ready = () => {
    setTimeout(() => {
      addButtonOpenConfig();
    }, 100)
  }

  $(ready)

})(window, jQuery)