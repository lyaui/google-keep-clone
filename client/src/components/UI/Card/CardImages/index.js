import { Fragment } from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { TOOLTIP_TEXT } from 'constants/tooltipText.js';
import * as Icon from 'components/UI/Icon.js';
import { useUIContextVal } from 'contexts/ui-context.js';
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

const CardImages = ({ images, isEditMode, deletImageHandler }) => {
  const { CTX_VIEW_MODE } = useUIContextVal();
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
      <SCardImages isEditMode={isEditMode} viewMode={CTX_VIEW_MODE.viewMode}>
        {images.slice(0, 6).map((image, index) => (
          <SCardImage key={index} className={`img-${index}`}>
            <img draggable='false' src={image} alt='' />
            {isEditMode && (
              <Tippy content={TOOLTIP_TEXT.REMOVE}>
                <ButtonSquare size='30' onClick={() => deletImageHandler(index)}>
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
