import { useMegaContext } from "../context/MegaContext"

export default function MegamenuTabConfig({ tabs }) {
  const { addTabItem, tabEditing, setTabEditing, addChildItem, updateField, childrenItemEditing, setChildrenItemEditing, addMoreChildItem, removeChildNavItem, wpMenus, removeChildItem, removeTabItem } = useMegaContext();

  return <div className="megamenu-tab-config">
    <div className="tab-heading">
      <ul>
        {
          tabs.map((i, t_index) => {
            let classes = ['tab-heading-item', tabEditing == i.__key ? '__active' : ''];
            return <li className={ classes.join(' ') } key={ i.__key }>
              <label onClick={ e => { setTabEditing(i.__key) } }>— { i.name }</label>
              {
                t_index != 0 &&
                <span className="dashicons dashicons-remove __remove-tab" onClick={ e => {
                  e.preventDefault();
                  let r = confirm('Are you sure delete this item?');
                  if(r) {
                    removeTabItem(t_index)
                  }
                } }></span>
              }
            </li>
          })
        }
        <li className="item-add-more-tab">
          <button 
            type="button" 
            className="add-tab-item" 
            onClick={ e => { addTabItem() } }>Add Tab Item</button>
        </li>
      </ul>
    </div>
    <div className="tab-content">
      {
        tabs.map((i, i_index) => {
          let classes = ['tab-content-item', tabEditing == i.__key ? '__active' : ''];
          return <div className={ classes.join(' ') } key={ i.__key }>
            <fieldset>
              <legend>Settings:</legend>
              <div className="group-field-3cols">
                <label className="field-item">
                  <span className="field-item__label">Tab Name</span>
                  <input type="text" placeholder="Tab name" onChange={ e => {
                    updateField(e.target.value, `tabs.${ i_index }.name`);
                  } } value={ i.name } />
                </label>
                <label className="field-item">
                  <span className="field-item__label">Tab URL</span>
                  <input type="text" placeholder="Tab URL" onChange={ e => {
                    updateField(e.target.value, `tabs.${ i_index }.href`);
                  } } value={ i.href } />
                </label>
                <label className="field-item">
                  <span className="field-item__label">Target</span>
                  <input type="text" placeholder="Target" onChange={ e => {
                    updateField(e.target.value, `tabs.${ i_index }.target`);
                  } } value={ i.target } />
                </label>
              </div>
            </fieldset>

            <div className="childrens" style={ {'--cols': i.settings.columns} }>
              {
                i?.children &&
                i.children.map((c, c_index) => {
                  return <div className="children-item" key={ c.__key }>
                    <fieldset>
                      <legend>{ c.heading }</legend>
                      {/* { JSON.stringify(c) } */}
                      <label className="field-item">
                        <span className="field-item__label">Type</span>
                        <select value={ c.type } onChange={ e => {
                          updateField(e.target.value, `tabs.${ i_index }.children.${ c_index }.type`);
                        } }>
                          {
                            [
                              { key: '__CUSTOM_MENU__', name: 'Custom Menu' },
                              { key: '__WP_MENU__', name: 'WP Menu' }
                            ].map(o => {
                              return <option value={ o.key } key={ o.key }>{ o.name }</option>
                            })
                          }
                        </select>
                      </label>

                      <label className="field-item">
                        <span className="field-item__label">Heading</span>
                        <input type="text" placeholder="Heading" onChange={ e => {
                          updateField(e.target.value, `tabs.${ i_index }.children.${ c_index }.heading`);
                        } } value={ c.heading } />
                      </label>

                      {
                        c.type == '__CUSTOM_MENU__' &&
                        <div className="field-item">
                          <span className="field-item__label">Items</span>
                          <ul className="children__nav-list">
                            {
                              c?.items &&
                              c.items.map((n, n_index) => {
                                return <li className="nav-item" key={ n.__key }>
                                  <div className="__label">
                                    <label>{ n.name }</label> 
                                    <span onClick={ e => {
                                      e.preventDefault();
                                      let r = confirm('Are you sure delete this item?');
                                      if(r) {
                                        removeChildNavItem(c_index, n_index)
                                      }
                                    } } className="dashicons dashicons-remove __remove" title="remove item"></span>
                                    <span onClick={ e => {
                                      e.preventDefault();
                                      if(childrenItemEditing == n.__key) {
                                        setChildrenItemEditing('')
                                      } else {
                                        setChildrenItemEditing(n.__key)
                                      }
                                      
                                    } } className={ ["dashicons __edit", (childrenItemEditing == n.__key ? 'dashicons-no' : 'dashicons-edit')].join(' ') } title="edit item"></span>
                                  </div>
                                  {
                                    childrenItemEditing == n.__key &&
                                    <div className="edit-item-nav">
                                      <label className="field-item">
                                        <span className="field-item__label">Name</span>
                                        <input type="text" placeholder="Name" onChange={ e => {
                                          updateField(e.target.value, `tabs.${ i_index }.children.${ c_index }.items.${ n_index }.name`);
                                        } } value={ n.name } />
                                      </label>

                                      <label className="field-item">
                                        <span className="field-item__label">Href</span>
                                        <input type="text" placeholder="Href" onChange={ e => {
                                          updateField(e.target.value, `tabs.${ i_index }.children.${ c_index }.items.${ n_index }.href`);
                                        } } value={ n.href } />
                                      </label>

                                      <label className="field-item">
                                        <span className="field-item__label">Target</span>
                                        <input type="text" placeholder="Target" onChange={ e => {
                                          updateField(e.target.value, `tabs.${ i_index }.children.${ c_index }.items.${ n_index }.target`);
                                        } } value={ n.target } />
                                      </label>
                                    </div>
                                  }
                                </li>
                              })
                            }
                            <li><button type="button" className="sbm-btn add-more-nav-item" onClick={ e => {
                              e.preventDefault();
                              addMoreChildItem(c_index)
                            } } >Add More Item</button></li>
                          </ul>
                        </div>
                      }

                      {
                        c.type == '__WP_MENU__' &&
                        <label className="field-item">
                          <span className="field-item__label">WP Menu</span>
                          <select value={ c.menuid } onChange={ e => {
                            updateField(e.target.value, `tabs.${ i_index }.children.${ c_index }.menuid`);
                          } }>
                            <option>-- Please select --</option>
                            {
                              wpMenus.length > 0 && 
                              wpMenus.map(m => {
                                return <option key={ `__wp-menu-${ m.term_id }` } value={ m.term_id }>{ m.name }</option>
                              })
                            }
                          </select>
                        </label>
                      }

                      <button type="button" className="sbm-btn" onClick={ e => {
                        e.preventDefault();
                        let r = confirm('Are you sure delete this item?');
                        if(r) {
                          removeChildItem(c_index);
                        }
                      } }>Remove Item</button>
                    </fieldset>
                  </div>
                })
              }
              <div className="children-item add-more-child">
                <div className="add-more-child__inner" onClick={ addChildItem }>
                  <span>Add More Item</span>
                </div>
              </div>
            </div>
          </div>
        })
      }
    </div>
  </div>
}