import { Fragment } from 'react';
import {
  SCardImages,
  SCardImage1,
  SCardImage2,
  SCardImage3,
  SCardImage4,
  SCardImage5,
  SCardImage6,
} from 'components/UI/Card/CardImages/style.js';

const CardImages = ({ images, isOnlyImagesAndLinks }) => {
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
      <SCardImages>
        {images.slice(0, 6).map((image, index) => (
          <SCardImage key={index} className={`img-${index}`} src={image} alt='' />
        ))}
      </SCardImages>
    </Fragment>
  );
};

export default CardImages;
