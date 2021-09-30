import * as Icon from 'components/UI/Icon/index.js';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { TOOLTIP_TEXT } from 'constants/tooltipText.js';
import { SCardFooter } from 'components/UI/Card/CardFooter/style.js';
import { ButtonRound } from 'components/UI/Buttons/index.js';

function CardFooter({ isOnlyImages, isOnlyLinks, isOnlyImagesAndLinks }) {
  const isOnlyImagesOrLinks = isOnlyImages || isOnlyLinks;
  const test = (e) => {
    e.stopPropagation();
    alert('alert');
  };
  return (
    <SCardFooter
      isOnlyImagesOrLinks={isOnlyImagesOrLinks}
      isOnlyImagesAndLinks={isOnlyImagesAndLinks}
    >
      {/* palette */}
      <Tippy content={TOOLTIP_TEXT.PALETTE}>
        <ButtonRound onClick={test} size={34}>
          <Icon.Palette />
        </ButtonRound>
      </Tippy>

      {/* image */}
      <Tippy content={TOOLTIP_TEXT.IMAGE}>
        <ButtonRound onClick={test} size={34}>
          <Icon.Image />
        </ButtonRound>
      </Tippy>

      {/* copy */}
      <Tippy content={TOOLTIP_TEXT.COPY}>
        <ButtonRound onClick={test} size={34}>
          <Icon.Copy />
        </ButtonRound>
      </Tippy>

      {/* archive */}
      <Tippy content={TOOLTIP_TEXT.ARCHIVE}>
        <ButtonRound onClick={test} size={34}>
          <Icon.Archive />
        </ButtonRound>
      </Tippy>

      {/* delete */}
      <Tippy content={TOOLTIP_TEXT.DELETE_MEMO}>
        <ButtonRound onClick={test} size={34}>
          <Icon.DeleteOutline />
        </ButtonRound>
      </Tippy>

      {/* delete */}
      <Tippy content={TOOLTIP_TEXT.MORE}>
        <ButtonRound onClick={test} size={34}>
          <Icon.More />
        </ButtonRound>
      </Tippy>
    </SCardFooter>
  );
}

export default CardFooter;
