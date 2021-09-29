import Layout from 'components/Layout';
import AddNewCard from 'components/EditCard';
import Cards from 'components/Cards';

const main = () => {
  return (
    <Layout>
      <AddNewCard />
      <Cards />
    </Layout>
  );
};

export default main;
