import { useRouteMatch } from 'react-router-dom';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { TOOLTIP_TEXT } from 'constants/tooltipText.js';
import * as Icon from 'components/UI/Icon/index.js';
import logo from 'assets/images/logo.png';
import FixMenu from 'components/Layout/Header/FixMenu';
import SearchInput from 'components/UI/SearchInput';
import ViewMode from 'components/Layout/Header/ViewMode';
import LogoutButton from 'components/Layout/Header/LogoutButton';
import { ButtonRound } from 'components/UI/Buttons/index.js';
import { SHeader, SHeaderLogo, SHeaderTitle } from 'components/Layout/Header/style.js';

const Header = () => {
  const match = useRouteMatch();
  const { labelName } = match.params;
  const logoPath = logo;
  return (
    <SHeader>
      {/* menu */}
      <FixMenu />
      <SHeaderLogo src={logoPath} alt='keep' />
      <SHeaderTitle>{labelName || '記事'}</SHeaderTitle>
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
        <LogoutButton />
      </div>
    </SHeader>
  );
};

export default Header;
