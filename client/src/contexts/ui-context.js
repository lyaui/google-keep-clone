import { createContext, useContext, useState } from 'react';
import { VIEW_MODE } from 'constants/UI.js';

const UIContext = createContext({
  viewMode: '',
});

const UIContextProvider = ({ children }) => {
  // viewmode
  const [viewMode, setViewMode] = useState(VIEW_MODE.GRID);
  const setGridHandler = () => setViewMode(VIEW_MODE.GRID);
  const setListHandler = () => setViewMode(VIEW_MODE.LIST);

  // show setting tooltip
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  const showTooltipHandler = () => setIsTooltipVisible(true);
  const hideTooltipHandler = () => setIsTooltipVisible(false);

  const contextValue = {
    CTX_VIEW_MODE: { viewMode, setGridHandler, setListHandler },
    CTX_TOOLTIP: { isTooltipVisible, showTooltipHandler, hideTooltipHandler },
  };

  return <UIContext.Provider value={contextValue}>{children}</UIContext.Provider>;
};

export default UIContextProvider;

export const useUIContextVal = () => useContext(UIContext);
