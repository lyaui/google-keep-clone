import { useParams } from 'react-router-dom';

import logo from '/public/assets/images/logo.png';
import FixMenu from '@/components/Layout/Header/FixMenu';
import SearchInput from '@/components/UI/SearchInput';
import EditViewModeButton from '@/components/ActionButtons/EditViewModeButton';
import EditThemeButton from '@/components/ActionButtons/EditThemeButton';
import LogoutButton from '@/components/Layout/Header/LogoutButton';
import {
  SHeader,
  SHeaderLogo,
  SHeaderTitle,
} from '@/components/Layout/Header/style';

function Header() {
  let { labelName } = useParams();

  return (
    <SHeader>
      {/* menu */}
      <FixMenu />
      <SHeaderLogo src={logo} alt="Keep" />
      <SHeaderTitle>{labelName || 'Keep'}</SHeaderTitle>
      {/* search */}
      <SearchInput />
      {/* operators */}
      <div>
        {/* view mode */}
        <EditViewModeButton />
        {/* light/dark mode */}
        <EditThemeButton />
        {/* logout */}
        <LogoutButton />
      </div>
    </SHeader>
  );
}

export default Header;
