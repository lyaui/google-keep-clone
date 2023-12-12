import { useNavigate } from 'react-router-dom';
import { SEditCard, SEditCardBody } from '@/components/EditCard/style';
import { SCreateMemoContent } from '@/components/EditCard/CreateMemoContent/style';

function EmptyCardEditor() {
  const navigate = useNavigate();
  const toggleEditorHandler = () => navigate({ search: '?edit=true' });

  return (
    <SEditCard onClick={toggleEditorHandler}>
      <SEditCardBody>
        <SCreateMemoContent>
          <div id="contentEdit" contentEditable="true" />
        </SCreateMemoContent>
      </SEditCardBody>
    </SEditCard>
  );
}

export default EmptyCardEditor;
