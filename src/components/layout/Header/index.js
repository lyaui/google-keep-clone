import * as Icon from 'components/UI/Icon.js';
import logo from 'assets/images/logo.png';
import SearchInput from 'components/UI/SearchInput';
import ViewMode from 'components/layout/Header/ViewMode';
import { ButtonRound } from 'components/UI/Buttons/index.js';
import { SHeader, SHeaderLogo, SHeaderTitle } from 'components/layout/Header/style.js';

const Header = () => {
  const logoPath = logo;
  return (
    <SHeader>
      <ButtonRound size={48}>
        <Icon.Menu />
      </ButtonRound>
      <SHeaderLogo src={logoPath} alt='keep' />
      <SHeaderTitle>記事</SHeaderTitle>
      {/* search */}
      <SearchInput />
      {/* operators */}
      <div>
        <ViewMode />
        <ButtonRound size={40}>
          <Icon.Moon />
        </ButtonRound>
        <ButtonRound size={40}>
          <Icon.Logout />
        </ButtonRound>
      </div>
    </SHeader>
  );
};

export default Header;
