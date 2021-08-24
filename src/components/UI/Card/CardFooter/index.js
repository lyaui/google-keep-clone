import * as Icon from 'components/UI/Icon.js';
import { SCardFooter } from 'components/UI/Card/CardFooter/style.js';
import { ButtonRound } from 'components/UI/Buttons/index.js';

function CardFooter() {
  return (
    <SCardFooter>
      {/* palette */}
      <ButtonRound size={34}>
        <Icon.Palette />{' '}
      </ButtonRound>
      {/* image */}
      <ButtonRound size={34}>
        <Icon.Image />
      </ButtonRound>
      {/* copy */}
      <ButtonRound size={34}>
        <Icon.Copy />
      </ButtonRound>
      {/* archive */}
      <ButtonRound size={34}>
        <Icon.Archive />
      </ButtonRound>
      {/* delete */}
      <ButtonRound size={34}>
        <Icon.DeleteOutline />
      </ButtonRound>
      {/* delete */}
      <ButtonRound size={34}>
        <Icon.More />
      </ButtonRound>
    </SCardFooter>
  );
}

export default CardFooter;
