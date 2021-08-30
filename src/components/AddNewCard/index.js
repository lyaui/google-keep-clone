import AddNewCardToolbar from 'components/AddNewCard/AddNewCardToolbar';
import { SAddNewCard, SAddNewCardTitle, SAddNewCardContent } from 'components/AddNewCard/style.js';

const AddNewCard = () => {
  return (
    <SAddNewCard>
      {/* image preview */}
      {/* title */}
      <SAddNewCardTitle contentEditable='true' />
      {/* content */}
      <SAddNewCardContent contentEditable='true' />
      {/* tags */}
      {/* toolbar */}
      <AddNewCardToolbar />
    </SAddNewCard>
  );
};

export default AddNewCard;
