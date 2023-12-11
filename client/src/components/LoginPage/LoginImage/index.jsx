import { useLocation } from 'react-router-dom';
import { useAuth, login } from '@/contexts/auth-context';
import { useUI, getUserSettings } from '@/contexts/UI-context';
import { ROUTER_PATH } from '@/routes';
import loginBackgroundImage from '/public/assets/images/login-background.jpeg';
import signupBackgroundImage from '/public/assets/images/signup-background.jpeg';
import {
  SLoginImage,
  SLoginImageTitle,
  SLoginImageText,
  SLoginImageButton,
} from '@/components/LoginPage/LoginImage/style';

function LoginImage() {
  const { pathname } = useLocation();
  const { authDispatch } = useAuth();
  const { UIDispatch } = useUI();

  const loginSampleUserHandler = async () => {
    const payload = {
      email: import.meta.env.REACT_APP_SAMPLE_USER,
      password: import.meta.env.REACT_APP_SAMPLE_PASSWORD,
    };
    const loginRes = await login(authDispatch, payload);
    if (!loginRes.success) return;
    await getUserSettings(UIDispatch);
  };

  return (
    <SLoginImage
      style={{
        '--image':
          pathname === ROUTER_PATH.LOGIN
            ? `url(${loginBackgroundImage})`
            : `url(${signupBackgroundImage})`,
      }}
    >
      <div>
        <SLoginImageTitle>記下每一個想法</SLoginImageTitle>
        <SLoginImageText>
          根據顏色或其他屬性，快速過濾及搜尋記事。 <br />
          您可以更快找到所需內容，至於繁瑣的細節，就交給 Keep 為您記住！
        </SLoginImageText>
        <SLoginImageButton onClick={loginSampleUserHandler}>
          試用 Google Keep
        </SLoginImageButton>
      </div>
    </SLoginImage>
  );
}

export default LoginImage;
