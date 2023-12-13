import { useNavigate } from 'react-router-dom';
import { SEditCard, SEditCardBody } from '@/components/EditCard/style';
import { SEditMemoContent } from '@/components/EditCard/EditMemoContent/style';

function EmptyCardEditor() {
  const navigate = useNavigate();
  const toggleEditorHandler = () => navigate({ search: '?edit=true' });

  return (
    <SEditCard onClick={toggleEditorHandler}>
      <SEditCardBody>
        <SEditMemoContent>
          <div id="contentEdit" contentEditable="true" />
        </SEditMemoContent>
      </SEditCardBody>
    </SEditCard>
  );
}

export default EmptyCardEditor;
