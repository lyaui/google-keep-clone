import { Fragment } from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { TOOLTIP_TEXT } from '@/constants/tooltipText';
import * as Icon from '@/components/UI/Icon';
import { useUI } from '@/contexts/UI-context/index.jsx';
import Button from '@/components/UI/Buttons';
import {
  SCardImages,
  SCardImage1,
  SCardImage2,
  SCardImage3,
  SCardImage4,
  SCardImage5,
  SCardImage6,
} from '@/components/UI/Card/CardImages/style.jsx';

const CardImages = ({
  images,
  isEditMode,
  deleteImageHandler,
  noCardBody = false,
}) => {
  const { UIState } = useUI();
  const { layout } = UIState;
  const imageComponents = [
    SCardImage1,
    SCardImage2,
    SCardImage3,
    SCardImage4,
    SCardImage5,
    SCardImage6,
  ];
  const imgNum = images.slice(0, 6).length;
  const SCardImage = imageComponents[imgNum - 1];
  return (
    <Fragment>
      <SCardImages
        isEditMode={isEditMode}
        viewMode={layout}
        noCardBody={noCardBody}
      >
        {images.slice(0, 6).map((image, index) => {
          <SCardImage key={image} className={`img-${index}`}>
            <img draggable="false" src={image} alt="" />
            {isEditMode && (
              <Tippy content={TOOLTIP_TEXT.REMOVE}>
                <Button
                  size="small"
                  variant="square"
                  onClick={() => deleteImageHandler(image)}
                >
                  <Icon.Delete />
                </Button>
              </Tippy>
            )}
          </SCardImage>;
        })}
      </SCardImages>
    </Fragment>
  );
};

export default CardImages;
