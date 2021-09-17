import { useState } from 'react';
import AddNewCardToolbar from 'components/AddNewCard/AddNewCardToolbar';
import CardImages from 'components/UI/Card/CardImages';
import {
  SAddNewCard,
  SAddNewCardBody,
  SAddNewCardTitle,
  SAddNewCardContent,
} from 'components/AddNewCard/style.js';

const AddNewCard = () => {
  const [isTodoList, setIsTodoList] = useState(false);
  const [uploadedImages, setUploadedImages] = useState([
    'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1560180474-e8563fd75bab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
    'https://images.unsplash.com/photo-1616526441653-e67d48c1db7c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1589385973461-eaa9b0ae2830?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=668&q=80',
    // 'https://images.unsplash.com/photo-1618485476424-7dc9cd512c08?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
    // 'https://images.unsplash.com/photo-1499635842761-4f1f28fafcff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    // 'https://images.unsplash.com/photo-1618320362989-d8a9eb2a1e52?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjAwfHxkZXNzZXJ0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
  ]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [color, setColor] = useState('');

  // redux
  // const updateMemoHandler = () => {};

  // const resetMemoHandler = () => {
  //   setIsTodoList();
  //   setUploadedImages([]);
  //   setTitle('');
  //   setContent('');
  // };

  return (
    <SAddNewCard>
      <SAddNewCardBody>
        {uploadedImages.length > 0 && (
          <CardImages
            images={uploadedImages}
            isEditMode='true'
            setUploadedImages={setUploadedImages}
          />
        )}
        {/* title */}
        <SAddNewCardTitle contentEditable='true' />
        {/* content */}
        <SAddNewCardContent contentEditable='true' />
        {/* tags */}
      </SAddNewCardBody>

      {/* toolbar */}
      <AddNewCardToolbar />
    </SAddNewCard>
  );
};

export default AddNewCard;
