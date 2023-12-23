import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import { TOOLTIP_TEXT } from '@/constants/tooltipText';
import { ROUTER_PATH } from '@/routes';
import * as Icon from '@/components/UI/Icon';
import { SSearch, SSreachInput } from '@/components/UI/SearchInput/style';
import Button from '@/components/UI/Buttons';

function SearchInput() {
  const navigate = useNavigate();

  const [isTouched, setIsTouched] = useState(false);
  const [keyword, setKeyword] = useState('');
  const inputRef = useRef(null);

  const focusInputHandler = (e) => {
    e.preventDefault();
    navigate(ROUTER_PATH.SEARCH);
    setIsTouched(true);
  };

  const blurInputHandler = () => setIsTouched(false);

  const changeInputHandler = (e) => {
    e.preventDefault();
    const enteredValue = inputRef.current.value;
    setKeyword(enteredValue);
    if (!enteredValue.trim()) return navigate({ search: null });
    navigate({ search: `?q=${enteredValue}` });
  };

  const clearInputHandler = (e) => {
    e.preventDefault();
    setKeyword('');
    navigate({});
  };

  return (
    <SSearch
      style={{
        '--shadow': isTouched && 'var(--shadow-sm)',
        '--color': isTouched
          ? 'var(--color-input-focus-bg)'
          : 'var(--color-input-bg)',
      }}
      onSubmit={(e) => e.preventDefault()}
    >
      <Tippy content={TOOLTIP_TEXT.SEARCH}>
        <Button size="large">
          <Icon.Search />
        </Button>
      </Tippy>
      <SSreachInput
        ref={inputRef}
        value={keyword}
        onChange={changeInputHandler}
        onFocus={focusInputHandler}
        onBlur={blurInputHandler}
        type="text"
        placeholder="搜尋"
      />
      <Tippy content={TOOLTIP_TEXT.CLEAR_SEARCH}>
        <Button size="large" onClick={clearInputHandler}>
          <Icon.Clear />
        </Button>
      </Tippy>
    </SSearch>
  );
}

export default SearchInput;
