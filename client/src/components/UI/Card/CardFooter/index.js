import * as Icon from 'components/UI/Icon/index.js';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { TOOLTIP_TEXT } from 'constants/tooltipText.js';
import { ButtonRound } from 'components/UI/Buttons/index.js';
import EditCardColorButton from 'components/ActionButtons/EditCardColorButton';
import CopyMemoButton from 'components/ActionButtons/CopyMemoButton';
import EditCardArchiveButton from 'components/ActionButtons/EditCardArchiveButton';
import DeleteCardButton from 'components/ActionButtons/DeleteCardButton';
import { SCardFooter } from 'components/UI/Card/CardFooter/style.js';

function CardFooter({ id, isOnlyImages, isOnlyLinks, isOnlyImagesAndLinks }) {
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
      <EditCardColorButton id={id} />
      {/* image */}
      <Tippy content={TOOLTIP_TEXT.IMAGE}>
        <ButtonRound onClick={test} size={34}>
          <Icon.Image />
        </ButtonRound>
      </Tippy>
      {/* copy */}
      <CopyMemoButton id={id} />
      {/* archive */}
      <EditCardArchiveButton id={id} />
      {/* delete */}
      <DeleteCardButton id={id} />
    </SCardFooter>
  );
}

export default CardFooter;
