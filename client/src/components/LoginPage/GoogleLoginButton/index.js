import * as Icon from 'components/UI/Icon/index.js';
import { SGoogleLoginButton } from 'components/LoginPage/GoogleLoginButton/style.js';
const GoogleLoginButton = () => {
  return (
    <SGoogleLoginButton>
      <Icon.Google />
      <span>使用 Google 帳號登入</span>
    </SGoogleLoginButton>
  );
};

export default GoogleLoginButton;
