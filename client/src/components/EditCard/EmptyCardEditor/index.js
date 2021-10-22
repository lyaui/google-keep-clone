import { useHistory } from 'react-router-dom';
import { SEditCard, SEditCardBody } from 'components/EditCard/style.js';
import { SEditCardContent } from 'components/EditCard/EditCardContent/style.js';

function EmptyCardEditor() {
  const history = useHistory();
  const testHandler = () => history.push({ search: '?edit=true' });

  return (
    <SEditCard onClick={testHandler}>
      <SEditCardBody>
        <SEditCardContent>
          <div id='contentEdit' contentEditable='true' />
        </SEditCardContent>
      </SEditCardBody>
    </SEditCard>
  );
}

export default EmptyCardEditor;
