import { createContext, useContext, useState } from 'react';
import { VIEW_MODE } from 'constants/UI.js';

const UIContext = createContext({
  viewMode: '',
  setGridHandler() {},
  setListHandler() {},
  tooltipName: null,
  showTooltipHandler() {},
  hideTooltipHandler() {},
});

const UIContextProvider = ({ children }) => {
  // viewmode
  const [viewMode, setViewMode] = useState(VIEW_MODE.GRID);
  const setGridHandler = () => setViewMode(VIEW_MODE.GRID);
  const setListHandler = () => setViewMode(VIEW_MODE.LIST);

  // show custom tooltip
  const [tooltipName, setTooltipName] = useState(null);
  const showTooltipHandler = (name) => () => setTooltipName(name);
  const hideTooltipHandler = () => setTooltipName(null);

  const contextValue = {
    CTX_VIEW_MODE: { viewMode, setGridHandler, setListHandler },
    CTX_TOOLTIP: { tooltipName, showTooltipHandler, hideTooltipHandler },
  };

  return <UIContext.Provider value={contextValue}>{children}</UIContext.Provider>;
};

export default UIContextProvider;

export const useUIContextVal = () => useContext(UIContext);
