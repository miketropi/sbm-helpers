const wp_get_all_menu = async () => {
  return await jQuery.ajax({
    type: 'POST',
    url: window.ajaxurl,
    data: {
      action: 'sbm_ajax_all_menus'
    },
    error: (e) => {
      console.error(e);
    }
  })
}

const save_mega_data = async (menuid, megadata) => {
  return await jQuery.ajax({
    type: 'POST',
    url: window.ajaxurl,
    data: {
      action: 'sbm_ajax_save_mega_data',
      menuid,
      megadata
    },
    error: (e) => {
      console.error(e);
    }
  })
}

const get_mega_data = async (menuid) => {
  return await jQuery.ajax({
    type: 'POST',
    url: window.ajaxurl,
    data: {
      action: 'sbm_ajax_get_mega_data',
      menuid
    },
    error: (e) => {
      console.error(e);
    }
  })
}

export { wp_get_all_menu, save_mega_data, get_mega_data }