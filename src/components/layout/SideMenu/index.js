import { Link } from 'react-router-dom';

const DUMMY_DATA = [
  { id: '1', label: '提醒' },
  { id: '2', label: '待辦事項' },
  { id: '3', label: '徵才' },
  { id: '4', label: '遊戲攻略' },
  { id: '5', label: '點子' },
  { id: '6', label: '編輯標籤' },
];

const SideMenu = () => {
  return (
    <aside>
      <ul>
        <li>
          <Link to={'/home'}>記事</Link>
        </li>
        {DUMMY_DATA.map((label) => (
          <li key={label.id}>
            <Link to={`/label/${label.label}`}>{label.label}</Link>
          </li>
        ))}
        <li>
          <Link to='/archive'>封存</Link>
        </li>
        <li>
          <Link to='/trash'>垃圾桶</Link>
        </li>
      </ul>
    </aside>
  );
};

export default SideMenu;
