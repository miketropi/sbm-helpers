import { createContext, useContext, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

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
      name: 'Menu item title',
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
          menuid: '',
        }
      ]
    }
  ]
};

const MegaContext_Provider = ({ children, menuid }) => {
  const [megaData, setMegaData] = useState(__DATA_MEGA_CONFIG_INIT);
  const [tabEditing, setTabEditing] = useState(__DATA_MEGA_CONFIG_INIT.tabs[0].__key);

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
    __megaData.tabs[tabIndex].children.push({
      __key: uuidv4(),
      type: '__CUSTOM_MENU__',
      heading: 'Heading ' + (__megaData.tabs[tabIndex].children.length + 1),
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

  const value = {
    version: '1.0.0',
    menuid,
    megaData, setMegaData,
    tabEditing, setTabEditing,
    addTabItem,
    addChildItem,
    updateField
  }

  return <MegaContext.Provider value={ value }>
    { children }
  </MegaContext.Provider>
}

const useMegaContext = () => {
  return useContext(MegaContext);
}

export { MegaContext_Provider, useMegaContext }