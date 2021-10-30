import { useRouteMatch } from 'react-router-dom';
import { ROUTE } from 'constants/routes.js';
import loginBackgroundImage from 'assets/images/login-background.jpeg';
import signupBackgroundImage from 'assets/images/signup-background.jpeg';
import {
  SLoginImage,
  SLoginImageTitle,
  SLoginImageText,
  SLoginImageButton,
} from 'components/LoginPage/LoginImage/style.js';

const LoginImage = () => {
  const { path } = useRouteMatch();
  return (
    <SLoginImage
      style={{
        '--image':
          path === ROUTE.LOGIN ? `url(${loginBackgroundImage})` : `url(${signupBackgroundImage})`,
      }}
    >
      <div>
        <SLoginImageTitle>記下每一個想法</SLoginImageTitle>
        <SLoginImageText>
          根據顏色或其他屬性，快速過濾及搜尋記事。 <br />
          您可以更快找到所需內容，至於繁瑣的細節，就交給 Keep 為您記住！
        </SLoginImageText>
        <SLoginImageButton>試用 Google Keep</SLoginImageButton>
      </div>
    </SLoginImage>
  );
};

export default LoginImage;
