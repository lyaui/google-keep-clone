import { Fragment } from 'react';
import { SCardImages, SCardImage } from 'components/UI/Card/CardImages/style.js';

const CardImages = ({ images, isOnlyImages }) => {
  // isOnlyImages 純圖片

  // !isOnlyImages 圖+文
  // 1 張圖
  // 2 張圖
  // 3 張圖

  // const imagesHeight = () => {
  //   switch (images) {
  //     case isOnlyImages:
  //       return 135;
  //     case images.length > 3:
  //     default:
  //       return 140;
  //   }
  // };
  return (
    <Fragment>
      <SCardImages>
        {images.slice(0, 5).map((image, index) => (
          <SCardImage key={index} src={image} alt='' />
        ))}
      </SCardImages>
    </Fragment>
  );
};

export default CardImages;
