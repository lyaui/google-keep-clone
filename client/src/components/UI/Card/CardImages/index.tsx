import { Fragment } from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { TOOLTIP_TEXT } from '@/constants/tooltipText';
import * as Icon from '@/components/UI/Icon';
import { useUI } from '@/contexts/UI-context';
import Button from '@/components/UI/Buttons';
import {
  SCardImages,
  SCardImage1,
  SCardImage2,
  SCardImage3,
  SCardImage4,
  SCardImage5,
  SCardImage6,
} from '@/components/UI/Card/CardImages/style';

interface CardImagesProps {
  images: string[];
  isEditMode?: boolean;
  onDelete?: (image: string) => void;
  noCardBody?: boolean;
}

const CardImages = ({
  images,
  isEditMode = false,
  onDelete,
  noCardBody = false,
}: CardImagesProps) => {
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
        {images.slice(0, imgNum).map((_image, index) => (
          <SCardImage key={_image} className={`img-${index}`}>
            <img draggable="false" src={_image} alt="" />
            {isEditMode && (
              <Tippy content={TOOLTIP_TEXT.REMOVE}>
                <Button
                  size="small"
                  variant="square"
                  onClick={() => onDelete && onDelete(_image)}
                >
                  <Icon.Delete />
                </Button>
              </Tippy>
            )}
          </SCardImage>
        ))}
      </SCardImages>
    </Fragment>
  );
};

export default CardImages;
