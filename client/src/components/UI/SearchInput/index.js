import { useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { TOOLTIP_TEXT } from 'constants/tooltipText.js';
import { ROUTE } from 'constants/routes.js';
import * as Icon from 'components/UI/Icon/index.js';
import { SSearch, SSreachInput } from 'components/UI/SearchInput/styled.js';
import { ButtonRound } from 'components/UI/Buttons/index.js';

const SearchInput = () => {
  const history = useHistory();

  const [isTouched, setIsTouched] = useState(false);
  const [keyword, setKeyword] = useState('');
  const inputRef = useRef(null);

  const focusInputHandler = (e) => {
    e.preventDefault();
    history.push(ROUTE.SEARCH);
    setIsTouched(true);
  };

  const blurInputHandler = () => setIsTouched(false);

  const changeInputHandler = (e) => {
    e.preventDefault();
    const enteredValue = inputRef.current.value;
    setKeyword(enteredValue);
    if (!enteredValue.trim()) return history.push({ search: null });
    history.push({ search: `?q=${enteredValue}` });
  };

  const clearInputHandler = (e) => {
    e.preventDefault();
    setKeyword('');
  };

  return (
    <SSearch
      style={{
        '--shadow': isTouched && 'var(--shadow-sm)',
        '--color': isTouched ? 'var(--color-input-focus-bg)' : 'var(--color-input-bg)',
      }}
      onSubmit={(e) => e.preventDefault()}
    >
      <Tippy content={TOOLTIP_TEXT.SEARCH}>
        <ButtonRound size={40}>
          <Icon.Search />
        </ButtonRound>
      </Tippy>
      <SSreachInput
        ref={inputRef}
        value={keyword}
        onChange={changeInputHandler}
        onFocus={focusInputHandler}
        onBlur={blurInputHandler}
        type='text'
        placeholder='搜尋'
      />
      <Tippy content={TOOLTIP_TEXT.CLEAR_SEARCH}>
        <ButtonRound size={40} onClick={clearInputHandler}>
          <Icon.Clear />
        </ButtonRound>
      </Tippy>
    </SSearch>
  );
};

export default SearchInput;
