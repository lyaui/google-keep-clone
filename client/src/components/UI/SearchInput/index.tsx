import { useState, useRef, useCallback } from 'react';
import type { MouseEvent, FocusEvent, ChangeEvent } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { debounce } from 'lodash';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import { TOOLTIP_TEXT } from '@/constants/tooltipText';
import { ROUTER_PATH } from '@/routes';
import * as Icon from '@/components/UI/Icon';
import { SSearch, SSreachInput } from '@/components/UI/SearchInput/style';
import Button from '@/components/UI/Buttons';

function SearchInput() {
  const navigate = useNavigate();
  const location = useLocation();

  const [isTouched, setIsTouched] = useState(false);
  const [keyword, setKeyword] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const focusInputHandler = (event: FocusEvent<HTMLInputElement>) => {
    event.preventDefault();
    setIsTouched(true);

    if (location.pathname === ROUTER_PATH.SEARCH) return;
    navigate(ROUTER_PATH.SEARCH);
  };

  const blurInputHandler = () => setIsTouched(false);

  const changeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const enteredValue = inputRef.current?.value || '';
    setKeyword(enteredValue);
    changeParamsHandler(enteredValue);
  };

  const changeParamsHandler = useCallback(
    debounce((enteredValue: string) => {
      if (enteredValue.trim()) {
        navigate({ search: `?q=${enteredValue}` });
      } else {
        navigate({});
      }
    }, 1000),
    []
  );

  const clearInputHandler = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setKeyword('');
    navigate({});
  };

  return (
    <SSearch isTouched={isTouched} onSubmit={(e) => e.preventDefault()}>
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
