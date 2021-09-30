import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { TOOLTIP_TEXT } from 'constants/tooltipText.js';
import * as Icon from 'components/UI/Icon/index.js';
import { SSearch, SSreachInput } from 'components/UI/SearchInput/styled.js';
import { ButtonRound } from 'components/UI/Buttons/index.js';

const SearchInput = () => {
  return (
    <SSearch>
      <Tippy content={TOOLTIP_TEXT.SEARCH}>
        <ButtonRound size={40}>
          <Icon.Search />
        </ButtonRound>
      </Tippy>

      <SSreachInput type='text' placeholder='搜尋' />

      <Tippy content={TOOLTIP_TEXT.CLEAR_SEARCH}>
        <ButtonRound size={40}>
          <Icon.Clear />
        </ButtonRound>
      </Tippy>
    </SSearch>
  );
};

export default SearchInput;
