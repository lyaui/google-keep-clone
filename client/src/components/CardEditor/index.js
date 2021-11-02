import { Fragment } from 'react';
import { useLocation } from 'react-router-dom';
import EmptyCardEditor from 'components/EditCard/EmptyCardEditor';
import EditCard from 'components/EditCard';

const CardEditor = () => {
  const { search } = useLocation();
  const editQuery = !!new URLSearchParams(search).get('edit');

  return (
    <Fragment>
      {!editQuery && <EmptyCardEditor />}
      {editQuery && <EditCard />}
    </Fragment>
  );
};

export default CardEditor;
