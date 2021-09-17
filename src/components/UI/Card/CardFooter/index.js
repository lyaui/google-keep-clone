import * as Icon from 'components/UI/Icon.js';
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
      <ButtonRound onClick={test} size={34}>
        <Icon.Palette />
      </ButtonRound>
      {/* image */}
      <ButtonRound onClick={test} size={34}>
        <Icon.Image />
      </ButtonRound>
      {/* copy */}
      <ButtonRound onClick={test} size={34}>
        <Icon.Copy />
      </ButtonRound>
      {/* archive */}
      <ButtonRound onClick={test} size={34}>
        <Icon.Archive />
      </ButtonRound>
      {/* delete */}
      <ButtonRound onClick={test} size={34}>
        <Icon.DeleteOutline />
      </ButtonRound>
      {/* delete */}
      <ButtonRound onClick={test} size={34}>
        <Icon.More />
      </ButtonRound>
    </SCardFooter>
  );
}

export default CardFooter;
