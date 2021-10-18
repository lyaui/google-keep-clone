import { useDispatch, useSelector } from 'react-redux';
import { memosActions } from 'store/memosSlice';
import CardImages from 'components/UI/Card/CardImages';
import { SEditCardImages } from 'components/EditCard/EditCardImages/style.js';

const EditCardImages = () => {
  const dispatch = useDispatch();
  const { memo } = useSelector((state) => state.memos);
  const { images } = memo;

  const addImageHandler = (newImage) => dispatch(memosActions.addImage(newImage));
  const deleteImageHandler = (index) => dispatch(memosActions.removeImage(index));

  return (
    <SEditCardImages>
      {images.length > 0 && (
        <CardImages
          images={images}
          isEditMode='true'
          addImageHandler={addImageHandler}
          deleteImageHandler={deleteImageHandler}
        />
      )}
    </SEditCardImages>
  );
};

export default EditCardImages;
