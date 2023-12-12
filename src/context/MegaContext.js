import { createContext, useContext, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { wp_get_all_menu, save_mega_data, get_mega_data } from '../libs/megamenu-api';

const MegaContext = createContext('');
const __DATA_MEGA_CONFIG_INIT = {
  settings: {
    enable: false,
    extra_content_display: true,
    extra_content: '',
  },
  tabs: [
    {
      __key: uuidv4(),
      name: 'Tab item title',
      href: '#',
      target: '_self',
      settings: {
        columns: 2
      },
      children: [
        {
          __key: uuidv4(),
          type: '__CUSTOM_MENU__',
          heading: 'Custom Menu Title',
          href: '#',
          items: [
            {
              __key: uuidv4(),
              name: 'Nav Item #1',
              href: '#',
              target: '_self'
            },
            {
              __key: uuidv4(),
              name: 'Nav Item #2',
              href: '#',
              target: '_self'
            },
          ]
        },
        {
          __key: uuidv4(),
          type: '__WP_MENU__',
          heading: 'Menu Title',
          href: '#',
          menuid: '',
        }
      ]
    }
  ]
};

const MegaContext_Provider = ({ children, menuid }) => {
  const [megaData, setMegaData] = useState({});
  const [tabEditing, setTabEditing] = useState('');
  const [childrenItemEditing, setChildrenItemEditing] = useState('');
  const [wpMenus, setWpMenus] = useState([]);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const __wp_get_all_menu = async () => {
      const menus = await wp_get_all_menu();
      setWpMenus(menus)
    }

    const __get_mega_data = async () => {
      const res = await get_mega_data(menuid);
      if(!res) {
        setMegaData(__DATA_MEGA_CONFIG_INIT);
        setTabEditing(__DATA_MEGA_CONFIG_INIT.tabs[0].__key);
        return;
      }

      setMegaData(res);
      setTabEditing(res.tabs[0].__key);
    }

    __wp_get_all_menu();
    __get_mega_data();
  }, [])

  const addTabItem = () => {
    let __megaData = {...megaData};
    let tabKey = uuidv4();
    __megaData.tabs.push({
      __key: tabKey,
      name: 'Menu item title ' + (__megaData.tabs.length + 1),
      href: '#',
      target: '_self',
      settings: {
        columns: 2
      },
      children: []
    });

    setMegaData(__megaData);
    setTabEditing(tabKey);
  }

  const addChildItem = () => {
    let __megaData = {...megaData};
    let tabIndex = __megaData.tabs.findIndex(t => t.__key == tabEditing);

    if(!__megaData.tabs[tabIndex].children) {
      __megaData.tabs[tabIndex].children = []
    }

    __megaData.tabs[tabIndex].children.push({
      __key: uuidv4(),
      type: '__CUSTOM_MENU__',
      heading: 'Heading ' + (__megaData.tabs[tabIndex].children.length + 1),
      href: '',
      items: []
    })

    setMegaData(__megaData);
  }

  const updateField = (value, idToFind) => {
    let __megaData = { ...megaData };

    let parent = __megaData;
    let path = idToFind.split('.');

    for (var i = 0; i < path.length - 1; i++)
      parent = parent[path[i]];

    parent[path[i]] = value;
    setMegaData(__megaData);
  }

  const addMoreChildItem = (__index) => {
    let __megaData = {...megaData};
    let tabIndex = __megaData.tabs.findIndex(t => t.__key == tabEditing);

    if(!__megaData.tabs[tabIndex].children[__index].items) {
      __megaData.tabs[tabIndex].children[__index].items = [];
    }

    __megaData.tabs[tabIndex].children[__index].items.push({
      __key: uuidv4(),
      name: 'Nav Item #' + (__megaData.tabs[tabIndex].children[__index].items.length + 1),
      href: '#',
      target: '_self'
    })
    setMegaData(__megaData);
  }

  const removeChildNavItem = (c_index, n_index) => {
    let __megaData = {...megaData};
    let tabIndex = __megaData.tabs.findIndex(t => t.__key == tabEditing);
    __megaData.tabs[tabIndex].children[c_index].items.splice(n_index, 1);
    setMegaData(__megaData);
  }

  const removeChildItem = (c_index) => {
    let __megaData = {...megaData};
    let tabIndex = __megaData.tabs.findIndex(t => t.__key == tabEditing);
    __megaData.tabs[tabIndex].children.splice(c_index, 1);
    setMegaData(__megaData);
  }

  const removeTabItem = (t_index) => {
    let __megaData = {...megaData};
    __megaData.tabs.splice(t_index, 1);
    setMegaData(__megaData);
  }

  const saveMegaData = async () => {
    let __megaData = { ...megaData };
    setSaving(true);
    await save_mega_data(menuid, __megaData);
    setSaving(false);
  }

  const value = {
    version: '1.0.0',
    menuid,
    megaData, setMegaData,
    tabEditing, setTabEditing,
    addTabItem,
    addChildItem,
    updateField,
    childrenItemEditing, setChildrenItemEditing,
    addMoreChildItem,
    removeChildNavItem,
    wpMenus, setWpMenus,
    removeChildItem,
    removeTabItem,
    saveMegaData,
    saving, setSaving
  }

  return <MegaContext.Provider value={ value }>
    { children }
  </MegaContext.Provider>
}

const useMegaContext = () => {
  return useContext(MegaContext);
}

export { MegaContext_Provider, useMegaContext }