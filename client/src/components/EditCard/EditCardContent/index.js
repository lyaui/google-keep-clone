import EditCardText from 'components/EditCard/EditCardText';
import { SEditCardContent } from 'components/EditCard/EditCardContent/style.js';

const EditCardContent = () => {
  const fetchContentHandler = () => {
    return JSON.parse(window.localStorage.getItem('testEditContent')) || '';
  };

  const updateContentHandler = (data) => {
    window.localStorage.setItem('testEditContent', data);
  };

  return (
    <SEditCardContent>
      <EditCardText
        fetchTextHandler={fetchContentHandler}
        updateTextHandler={updateContentHandler}
      />
    </SEditCardContent>
  );
};

export default EditCardContent;
