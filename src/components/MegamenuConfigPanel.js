import { useMegaContext } from "../context/MegaContext";
import MegamenuTabConfig from './MegamenuTabConfig';

export default function MegamenuConfigPanel() {
  const { menuid, megaData, setMegaData } = useMegaContext();
  return <div className="megamenu-config-panel">
    <h4 className="edit-title">Edit menu item #{ menuid }</h4>
    <hr />
    <MegamenuTabConfig tabs={ megaData.tabs } />
  </div>
}