import { createContext, useContext, useState } from 'react';
import { VIEW_MODE } from 'constants/UI.js';

const UIContext = createContext({
  isFixedMenu: false,
  fixMenuHandler() {},
  unfixMenuHandler() {},
  viewMode: '',
  setGridHandler() {},
  setListHandler() {},
  tooltipName: null,
  showTooltipHandler() {},
  hideTooltipHandler() {},
});

const UIContextProvider = ({ children }) => {
  // fix side-menu
  const [isFixedMenu, setIsFixedMenu] = useState(false);
  const ToggleMenuHandler = () => setIsFixedMenu(!isFixedMenu);

  // viewmode
  const [viewMode, setViewMode] = useState(VIEW_MODE.GRID);
  const setGridHandler = () => setViewMode(VIEW_MODE.GRID);
  const setListHandler = () => setViewMode(VIEW_MODE.LIST);

  // show custom tooltip
  const [tooltipName, setTooltipName] = useState(null);
  const showTooltipHandler = (name) => () => setTooltipName(name);
  const hideTooltipHandler = () => setTooltipName(null);

  const contextValue = {
    CTX_FIXMENU: { isFixedMenu, ToggleMenuHandler },
    CTX_VIEW_MODE: { viewMode, setGridHandler, setListHandler },
    CTX_TOOLTIP: { tooltipName, showTooltipHandler, hideTooltipHandler },
  };

  return <UIContext.Provider value={contextValue}>{children}</UIContext.Provider>;
};

export default UIContextProvider;

export const useUIContextVal = () => useContext(UIContext);
