import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { TOOLTIP_TEXT } from 'constants/tooltipText.js';
import * as Icon from 'components/UI/Icon.js';
import logo from 'assets/images/logo.png';
import FixMenu from 'components/layout/Header/FixMenu';
import SearchInput from 'components/UI/SearchInput';
import ViewMode from 'components/layout/Header/ViewMode';
import { ButtonRound } from 'components/UI/Buttons/index.js';
import { SHeader, SHeaderLogo, SHeaderTitle } from 'components/layout/Header/style.js';

const Header = () => {
  const logoPath = logo;
  return (
    <SHeader>
      {/* menu */}
      <FixMenu />
      <SHeaderLogo src={logoPath} alt='keep' />
      <SHeaderTitle>記事</SHeaderTitle>
      {/* search */}
      <SearchInput />
      {/* operators */}
      <div>
        {/* view mode */}
        <ViewMode />

        {/* light/dark mode */}
        <Tippy content={TOOLTIP_TEXT.DARK_MODE}>
          <ButtonRound size={40}>
            <Icon.Moon />
          </ButtonRound>
        </Tippy>

        {/* logout */}
        <Tippy content={TOOLTIP_TEXT.LOGOUT}>
          <ButtonRound size={40}>
            <Icon.Logout />
          </ButtonRound>
        </Tippy>
      </div>
    </SHeader>
  );
};

export default Header;
