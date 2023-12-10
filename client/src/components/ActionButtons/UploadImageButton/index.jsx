import { useDispatch } from 'react-redux';
import { uploadMemoImage } from '@/store/memosSlice/memos-action.js';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { TOOLTIP_TEXT } from '@/constants/tooltipText.js';
import * as Icon from '@/components/UI/Icon/index.jsx';
import Button from '@/components/UI/Buttons';
import { SUploadImage } from '@/components/ActionButtons/UploadImageButton/style.jsx';

const UploadImageButton = () => {
  const dispatch = useDispatch();

  const pickImageHandler = async (e) => {
    if (e.target.files.length === 0) return;
    const pickedFile = e.target.files[0];
    const formData = new FormData();
    formData.append('image', pickedFile);

    await dispatch(uploadMemoImage(formData));
  };

  return (
    <Tippy content={TOOLTIP_TEXT.IMAGE}>
      <Button size="medium" style={{ position: 'relative' }}>
        <Icon.Image />
        <SUploadImage htmlFor="upload-button" />
        <input
          type="file"
          id="upload-button"
          style={{ display: 'none' }}
          accept=".jpg,.png,.jpeg,.gif"
          onChange={pickImageHandler}
        />
      </Button>
    </Tippy>
  );
};

export default UploadImageButton;
