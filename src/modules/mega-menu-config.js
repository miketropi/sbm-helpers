/**
 * Mega menu build config backend
 */
import React from 'react'
import { createRoot } from 'react-dom/client';
import MegamenuConfigPanel from '../components/MegamenuConfigPanel';
import { MegaContext_Provider } from '../context/MegaContext';

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
      $li.find('label.item-title').append(`<button type="button" class="sbm-megamenu-config" data-menu-id="${ menuID }">Mega Config</button>`);
    })
  }

  const popupDisplay = () => {
    $('body').on('click', '.sbm-megamenu-config', (e) => {
      e.preventDefault();
      $('body').addClass('sbm-megamenu-config-popup__show')
      let menuID = $(e.target).data('menu-id');
      $('body').trigger('sbm:megamenu-config-popup__show', [menuID])
    })

    $('body').on('click', '.sbm-megamenu-config-popup__close', (e) => {
      e.preventDefault();
      $('body').removeClass('sbm-megamenu-config-popup__show');
      $('body').trigger('sbm:megamenu-config-popup__close');
    })
  }

  const configPanelInit = (menuID) => {
    // console.log(menuID);
    const rootEl = document.getElementById('SBM_MEGAMENU_CONFIG_ROOT');
    const newRoot = document.createElement('div');
    rootEl.innerHTML = "";
    rootEl.appendChild(newRoot)
  
    if(rootEl) {
      const root = createRoot(newRoot);
      root.render(
      <MegaContext_Provider menuid={ menuID }>
        <MegamenuConfigPanel />
      </MegaContext_Provider>);
    }
  }

  const ready = () => {
    setTimeout(() => {
      addButtonOpenConfig();
    }, 100)

    popupDisplay();

    /**
     * On popup open
     */
    $('body').on('sbm:megamenu-config-popup__show', (e, menuID) => {
      configPanelInit(menuID)
    })
  }

  $(ready)

})(window, jQuery)