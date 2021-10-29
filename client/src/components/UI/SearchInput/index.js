import { useState } from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { TOOLTIP_TEXT } from 'constants/tooltipText.js';
import * as Icon from 'components/UI/Icon/index.js';
import { SSearch, SSreachInput } from 'components/UI/SearchInput/styled.js';
import { ButtonRound } from 'components/UI/Buttons/index.js';

const SearchInput = () => {
  const [isTouched, setIsTouched] = useState(false);
  const focusInputHandler = () => {
    setIsTouched(true);
  };
  const blurInputHandler = () => {
    setIsTouched(false);
  };
  return (
    <SSearch
      style={{
        '--shadow': isTouched && 'var(--shadow-sm)',
        '--color': isTouched ? 'var(--color-input-focus-bg)' : 'var(--color-input-bg)',
      }}
    >
      <Tippy content={TOOLTIP_TEXT.SEARCH}>
        <ButtonRound size={40}>
          <Icon.Search />
        </ButtonRound>
      </Tippy>
      <SSreachInput
        onFocus={focusInputHandler}
        onBlur={blurInputHandler}
        type='text'
        placeholder='搜尋'
      />
      <Tippy content={TOOLTIP_TEXT.CLEAR_SEARCH}>
        <ButtonRound size={40}>
          <Icon.Clear />
        </ButtonRound>
      </Tippy>
    </SSearch>
  );
};

export default SearchInput;
