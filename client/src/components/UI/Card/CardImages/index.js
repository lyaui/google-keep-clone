import { Fragment } from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { TOOLTIP_TEXT } from 'constants/tooltipText.js';
import * as Icon from 'components/UI/Icon/index.js';
import { useUI } from 'contexts/UI-context/index.js';
import { ButtonSquare } from 'components/UI/Buttons';
import {
  SCardImages,
  SCardImage1,
  SCardImage2,
  SCardImage3,
  SCardImage4,
  SCardImage5,
  SCardImage6,
} from 'components/UI/Card/CardImages/style.js';

const CardImages = ({ images, isEditMode, deleteImageHandler, noCardBody = false }) => {
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
      <SCardImages isEditMode={isEditMode} viewMode={layout} noCardBody={noCardBody}>
        {images.slice(0, 6).map((image, index) => (
          <SCardImage key={index} className={`img-${index}`}>
            <img draggable='false' src={`${process.env.REACT_APP_BASE_URL}/${image}`} alt='' />
            {isEditMode && (
              <Tippy content={TOOLTIP_TEXT.REMOVE}>
                <ButtonSquare size='30' onClick={() => deleteImageHandler(index)}>
                  <Icon.Delete />
                </ButtonSquare>
              </Tippy>
            )}
          </SCardImage>
        ))}
      </SCardImages>
    </Fragment>
  );
};

export default CardImages;
