import EditCardText from 'components/EditCard/EditCardText';
import { SEditCardTitle } from 'components/EditCard/EditCardTitle/style.js';

const EditCardTitle = () => {
  const fetchTitleHandler = () => {
    return JSON.parse(window.localStorage.getItem('testEditTitle')) || '';
  };

  const updateTitleHandler = (data) => {
    window.localStorage.setItem('testEditTitle', data);
  };

  return (
    <SEditCardTitle>
      <EditCardText fetchTextHandler={fetchTitleHandler} updateTextHandler={updateTitleHandler} />
    </SEditCardTitle>
  );
};

export default EditCardTitle;
