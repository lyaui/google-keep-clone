import { useNavigate } from 'react-router-dom';
import { SEditCard, SEditCardBody } from '@/components/EditCard/style';
import { SEditCardContent } from '@/components/EditCard/EditCardContent/style';

function EmptyCardEditor() {
  const navigate = useNavigate();
  const toggleEditorHandler = () => navigate({ search: '?edit=true' });

  return (
    <SEditCard onClick={toggleEditorHandler}>
      <SEditCardBody>
        <SEditCardContent>
          <div id="contentEdit" contentEditable="true" />
        </SEditCardContent>
      </SEditCardBody>
    </SEditCard>
  );
}

export default EmptyCardEditor;
