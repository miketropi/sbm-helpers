import { useMegaContext } from "../context/MegaContext"

export default function MegamenuTabConfig({ tabs }) {
  const { addTabItem, tabEditing, setTabEditing, addChildItem, updateField } = useMegaContext();

  return <div className="megamenu-tab-config">
    <div className="tab-heading">
      <ul>
        {
          tabs.map(i => {
            let classes = ['tab-heading-item', tabEditing == i.__key ? '__active' : ''];
            return <li className={ classes.join(' ') } key={ i.__key }>
              <label onClick={ e => { setTabEditing(i.__key) } }>— { i.name }</label>
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
                  <input type="text" placeholder="Tab URL" onChange={ e => {} } value={ i.href } />
                </label>
                <label className="field-item">
                  <span className="field-item__label">Target</span>
                  <input type="text" placeholder="Target" onChange={ e => {} } value={ i.target } />
                </label>
              </div>
            </fieldset>

            <div className="childrens" style={ {'--cols': i.settings.columns} }>
              {
                i.children.map(c => {
                  return <div className="children-item" key={ c.__key }>
                    <fieldset>
                      <legend>{ c.heading }</legend>
                      { JSON.stringify(c) }
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