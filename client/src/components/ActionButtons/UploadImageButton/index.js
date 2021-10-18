import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { memosActions } from 'store/memosSlice';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { TOOLTIP_TEXT } from 'constants/tooltipText.js';
import * as Icon from 'components/UI/Icon/index.js';
import { ButtonRound } from 'components/UI/Buttons/index.js';
import { SUploadImage } from 'components/ActionButtons/UploadImageButton/style.js';

const UploadImageButton = () => {
  const dispatch = useDispatch();
  const [file, setFile] = useState(null);

  useEffect(() => {
    if (!file) return;
    const fileReader = new FileReader(file);
    fileReader.onload = () => {
      dispatch(memosActions.addImage({ image: fileReader.result }));
    };
    fileReader.readAsDataURL(file);
  }, [dispatch, file]);

  const pickImageHandler = (e) => {
    if (e.target.files.length === 0) return;
    const pickedFile = e.target.files[0];
    setFile(pickedFile);
  };

  return (
    <Tippy content={TOOLTIP_TEXT.IMAGE}>
      <ButtonRound size={34} style={{ position: 'relative' }}>
        <Icon.Image />
        <SUploadImage htmlFor='upload-button' />
        <input
          type='file'
          id='upload-button'
          style={{ display: 'none' }}
          accept='.jpg,.png,.jpeg,.gif'
          onChange={pickImageHandler}
        />
      </ButtonRound>
    </Tippy>
  );
};

export default UploadImageButton;
