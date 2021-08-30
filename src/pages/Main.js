import { Fragment } from 'react';
import AddNewCard from 'components/AddNewCard';
import Cards from 'components/Cards';

const main = () => {
  return (
    <Fragment>
      <AddNewCard />
      <Cards />
    </Fragment>
  );
};

export default main;
