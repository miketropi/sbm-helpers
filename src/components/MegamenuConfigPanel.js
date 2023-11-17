import { useMegaContext } from "../context/MegaContext";
import MegamenuTabConfig from './MegamenuTabConfig';

export default function MegamenuConfigPanel() {
  const { menuid, megaData, setMegaData, updateField, saveMegaData } = useMegaContext();
  return <div className="megamenu-config-panel">
    <div className="edit-title">
      <h4>Edit menu item #{ menuid }</h4>
      <div className="__tools">
        <div className="megamenu-onoff">
          <div className={ ['toogle-ui', megaData.settings.enable ? '__active' : ''].join(' ') } onClick={ e => {
            e.preventDefault();
            updateField(!megaData.settings.enable, 'settings.enable')
          } }>
            <span className="toogle-ui__dot"></span>
          </div> 
          { megaData.settings.enable ? 'Enable' : 'Disable' }
        </div>
        <button className="sbm-btn" onClick={ saveMegaData }>Save</button>
      </div>
    </div>

    <hr />

    <div className={ [megaData.settings.enable ? '' : '__disable'] }>
      <MegamenuTabConfig tabs={ megaData.tabs } />
    </div>
    
  </div>
}