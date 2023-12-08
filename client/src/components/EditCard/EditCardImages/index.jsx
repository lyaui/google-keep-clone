import { useUpdateMemo } from '@/hooks/updateMemo-hook.js';
import CardImages from '@/components/UI/Card/CardImages';
import { SEditCardImages } from '@/components/EditCard/EditCardImages/style.jsx';

const EditCardImages = ({ id }) => {
  const { currentMemo, dispatchUpdateMemo } = useUpdateMemo(id);
  const { images } = currentMemo;

  const deleteImageHandler = (imageIdx) => {
    const updatedImages = images.filter((image, index) => index !== imageIdx);
    dispatchUpdateMemo({ images: updatedImages });
  };

  return (
    <SEditCardImages>
      {images.length > 0 && (
        <CardImages
          images={images}
          isEditMode='true'
          deleteImageHandler={deleteImageHandler}
        />
      )}
    </SEditCardImages>
  );
};

export default EditCardImages;
