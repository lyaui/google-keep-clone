import type { ChangeEvent } from 'react';
import styled from 'styled-components';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import { useAppDispatch } from '@/hooks/useReduxStore';
import { uploadMemoImage } from '@/store/memosSlice/memos-action';
import { TOOLTIP_TEXT } from '@/constants/tooltipText';
import * as Icon from '@/components/UI/Icon';
import Button from '@/components/UI/Buttons';

export const SUploadImage = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 34px;
  height: 34px;
  border-radius: var(--rounded-full);
  background-color: transparent;
  cursor: pointer;
`;

function UploadImageButton() {
  const dispatch = useAppDispatch();

  const pickImageHandler = async (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;
    if (event.target.files.length === 0) return;

    const pickedFile = event.target.files[0];
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
}

export default UploadImageButton;
