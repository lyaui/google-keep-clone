import { useState } from 'react';
import CardImages from 'components/UI/Card/CardImages';

const EditCardImages = () => {
  const [images, setImages] = useState([
    'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1560180474-e8563fd75bab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
    'https://images.unsplash.com/photo-1616526441653-e67d48c1db7c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1589385973461-eaa9b0ae2830?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=668&q=80',
    'https://images.unsplash.com/photo-1618485476424-7dc9cd512c08?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
    'https://images.unsplash.com/photo-1499635842761-4f1f28fafcff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1618320362989-d8a9eb2a1e52?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjAwfHxkZXNzZXJ0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
  ]);

  const addImageHandler = (newImage) => {
    setImages([...images, newImage]);
  };
  const deletImageHandler = (index) => {
    const newImages = [...images].filter((image, idx) => idx !== index);
    setImages(newImages);
  };

  return (
    <div>
      {images.length > 0 && (
        <CardImages
          images={images}
          isEditMode='true'
          setUploadedImages={setImages}
          addImageHandler={addImageHandler}
          deletImageHandler={deletImageHandler}
        />
      )}
    </div>
  );
};

export default EditCardImages;
