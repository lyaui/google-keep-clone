import styled from 'styled-components';
import { useUpdateMemo } from '@/hooks/useUpdateMemo';
import CardImages from '@/components/UI/Card/CardImages';

export const SCreateMemoImages = styled.div`
  margin: 0px -20px;
`;

const EditMemoImages = () => {
  const { currentMemo, dispatchUpdateMemo } = useUpdateMemo();
  const { images } = currentMemo;

  const deleteImageHandler = (image: string) => {
    const updatedImages = images.filter((_image) => _image !== image);
    dispatchUpdateMemo({ images: updatedImages });
  };

  return (
    <SCreateMemoImages>
      {images.length > 0 && (
        <CardImages
          images={images}
          isEditMode="true"
          deleteImageHandler={deleteImageHandler}
        />
      )}
    </SCreateMemoImages>
  );
};

export default EditMemoImages;
