import { createContext, useContext, useState } from 'react';
import DUMMY_DATA from 'data/memos.js';

const MemoContext = createContext({
  memos: [],
  setMemos: (result) => {},
});

const MemoContextProvider = ({ children }) => {
  const [memos, setMemos] = useState(DUMMY_DATA);
  const contextValue = { memos: memos, setMemos: setMemos };

  return <MemoContext.Provider value={contextValue}>{children}</MemoContext.Provider>;
};
export default MemoContextProvider;

export const useMemoContextVal = () => useContext(MemoContext);
