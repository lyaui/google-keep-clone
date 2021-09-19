import * as Icon from 'components/UI/Icon.js';
import { SSearch, SSreachInput } from 'components/UI/SearchInput/styled.js';
import { ButtonRound } from 'components/UI/Buttons/index.js';

const SearchInput = () => {
  return (
    <SSearch>
      <ButtonRound size={40}>
        <Icon.Search />
      </ButtonRound>
      <SSreachInput type='text' placeholder='搜尋' />
      <ButtonRound size={40}>
        <Icon.Clear />
      </ButtonRound>
    </SSearch>
  );
};

export default SearchInput;
