import { Fragment } from 'react';
import { useLocation } from 'react-router-dom';

import EmptyCardEditor from '@/components/EditCard/EmptyCardEditor';
import EditCard from '@/components/EditCard';

const CardEditor = () => {
  const { search } = useLocation();
  const editQuery = !!new URLSearchParams(search).get('edit');

  return <Fragment>{editQuery ? <EditCard /> : <EmptyCardEditor />}</Fragment>;
};

export default CardEditor;
