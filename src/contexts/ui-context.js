import { createContext, useContext, useState } from 'react';
import { VIEW_MODE } from 'constants/UI.js';

const UIContext = createContext({
  viewMode: '',
});

const UIContextProvider = ({ children }) => {
  // viewmode
  const [viewMode, setViewMode] = useState(VIEW_MODE.GRID);
  const setGridHandler = () => {
    setViewMode(VIEW_MODE.GRID);
  };
  const setListHandler = () => {
    setViewMode(VIEW_MODE.LIST);
  };

  const contextValue = { viewMode, setGridHandler, setListHandler };

  return <UIContext.Provider value={contextValue}>{children}</UIContext.Provider>;
};

export default UIContextProvider;

export const useUIContextVal = () => useContext(UIContext);
