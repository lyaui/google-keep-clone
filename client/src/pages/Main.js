import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { TOAST_TEXT } from 'constants/toastText.js';
import { ROUTE } from 'constants/routes.js';
import { useAuth } from 'contexts/auth-context';
import { useUI, getUserSettings } from 'contexts/UI-context/index.js';
import Layout from 'components/Layout';
import AddNewCard from 'components/EditCard';
import Cards from 'components/Cards';

const Main = () => {
  const history = useHistory();
  const { authState } = useAuth();
  const { UIDispatch } = useUI();
  const userId = authState.userId;

  useEffect(() => {
    (async () => {
      if (!userId) return history.replace(ROUTE.LOGIN);
      try {
        const res = await getUserSettings(UIDispatch, { userId });
        if (!res.success) throw new Error();
      } catch {
        toast(TOAST_TEXT.SETTINGS_FAIL);
        history.replace(ROUTE.LOGIN);
      }
    })();
  }, [history, UIDispatch, userId]);

  return (
    <Layout>
      <AddNewCard />
      <Cards />
    </Layout>
  );
};

export default Main;
