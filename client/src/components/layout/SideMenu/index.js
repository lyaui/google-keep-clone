import NavItem from 'components/Layout/SideMenu/NavItem/index.js';
import { SSideMenu, SSideMenuList } from 'components/Layout/SideMenu/style.js';
import { useUIContextVal } from 'contexts/ui-context.js';

const DUMMY_DATA = [
  { id: '1', label: '提醒' },
  { id: '2', label: '待辦事項' },
  { id: '3', label: '徵才' },
  { id: '4', label: '遊戲攻略' },
  { id: '5', label: '開發紀錄' },
  { id: '6', label: '影視感想' },
  { id: '7', label: '購物清單' },
  { id: '9', label: '雜' },
  { id: '10', label: '點子點子點子點子點子點子點子點子點子點子點子點子點子點子點子點子點子' },
];

const SideMenu = () => {
  const { CTX_FIXMENU } = useUIContextVal();

  return (
    <SSideMenu isFixedMenu={CTX_FIXMENU.isFixedMenu}>
      <SSideMenuList>
        <NavItem id='memo' label='記事' type='memo' />
        {/* labels */}
        {DUMMY_DATA.map((item) => (
          <NavItem key={item.id} id={item.id} label={item.label} type='label' />
        ))}
        <NavItem id='edit' label='編輯標籤' type='edit' />
        <NavItem id='archive' label='封存' type='archive' />
      </SSideMenuList>
    </SSideMenu>
  );
};

export default SideMenu;
