import { Fragment } from "react";
import { useMegaContext } from "../context/MegaContext";
import MegamenuTabConfig from './MegamenuTabConfig';
import { _Boolean } from '../libs/helpers';

export default function MegamenuConfigPanel() {
  const { menuid, megaData, setMegaData, updateField, saveMegaData, saving } = useMegaContext();
  return <div className="megamenu-config-panel">
    {
      megaData.settings && 
      <Fragment>
        <div className="edit-title">
          <h4>Edit menu item #{ menuid }</h4>
          <div className="__tools">
            <div className="megamenu-onoff">
              <div className={ ['toogle-ui', _Boolean(megaData.settings.enable) ? '__active' : ''].join(' ') } onClick={ e => {
                e.preventDefault();
                updateField(!_Boolean(megaData.settings.enable), 'settings.enable')
              } }>
                <span className="toogle-ui__dot"></span>
              </div> 
              { _Boolean(megaData.settings.enable) ? 'Enable' : 'Disable' }
            </div>
            <button 
              className={ ['sbm-btn', (saving ? 'sbm-loading' : '')].join(' ') } 
              onClick={ saveMegaData }>{ saving ? 'Saving...' : 'Save' }</button>
          </div>
        </div>

        <hr />

        <div className={ [_Boolean(megaData.settings.enable) ? '' : '__disable'] }>
          <MegamenuTabConfig tabs={ megaData.tabs } />
        </div>
      </Fragment>
    }
  </div>
}