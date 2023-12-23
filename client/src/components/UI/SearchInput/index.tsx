import { useState, useRef } from 'react';
import type { MouseEvent, FocusEvent, ChangeEvent } from 'react';
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
  const inputRef = useRef<HTMLInputElement>(null);

  const focusInputHandler = (event: FocusEvent<HTMLInputElement>) => {
    event.preventDefault();
    navigate(ROUTER_PATH.SEARCH);
    setIsTouched(true);
  };

  const blurInputHandler = () => setIsTouched(false);

  const changeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const enteredValue = inputRef.current?.value || '';
    setKeyword(enteredValue);
    if (!enteredValue.trim()) {
      navigate({});
      return;
    }
    navigate({ search: `?q=${enteredValue}` });
  };

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
