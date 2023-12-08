import { useHistory } from 'react-router-dom';
import { SEditCard, SEditCardBody } from '@/components/EditCard/style.jsx';
import { SEditCardContent } from '@/components/EditCard/EditCardContent/style.jsx';

function EmptyCardEditor() {
  const history = useHistory();
  const toggleEditorHandler = () => history.push({ search: '?edit=true' });

  return (
    <SEditCard onClick={toggleEditorHandler}>
      <SEditCardBody>
        <SEditCardContent>
          <div id='contentEdit' contentEditable='true' />
        </SEditCardContent>
      </SEditCardBody>
    </SEditCard>
  );
}

export default EmptyCardEditor;
