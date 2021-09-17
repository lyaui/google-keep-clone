import { Fragment } from 'react';
import * as Icon from 'components/UI/Icon.js';
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

const CardImages = ({ images, isEditMode }) => {
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
      <SCardImages isEditMode={isEditMode}>
        {images.slice(0, 6).map((image, index) => (
          <SCardImage key={index} className={`img-${index}`}>
            <img src={image} alt='' />
            {isEditMode && (
              <ButtonSquare size='30'>
                <Icon.Delete />
              </ButtonSquare>
            )}
          </SCardImage>
        ))}
      </SCardImages>
    </Fragment>
  );
};

export default CardImages;
