import NavItem from 'components/layout/SideMenu/NavItem/index.js';
import { SSideMenu, SSideMenuList } from 'components/layout/SideMenu/style.js';

const DUMMY_DATA = [
  { id: '1', label: '提醒' },
  { id: '2', label: '待辦事項' },
  { id: '3', label: '徵才' },
  { id: '4', label: '遊戲攻略' },
  { id: '5', label: '點子' },
];

const SideMenu = () => {
  return (
    <SSideMenu>
      <SSideMenuList>
        <NavItem id='memo' label='記事' type='memo' />
        {/* labels */}
        {DUMMY_DATA.map((item) => (
          <NavItem key={item.id} id={item.id} label={item.label} type='label' />
        ))}
        <NavItem id='edit' label='編輯標籤' type='edit' />
        <NavItem id='archive' label='封存' type='archive' />
        <NavItem id='trash' label='垃圾桶' type='trash' />
      </SSideMenuList>
    </SSideMenu>
  );
};

export default SideMenu;
