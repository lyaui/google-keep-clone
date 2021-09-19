import * as Icon from 'components/UI/Icon.js';
import { ButtonRound } from 'components/UI/Buttons/index.js';
import { SEditCardToolbar } from 'components/EditCard/ECardToolbar/style.js';

const EditCardToolbar = () => {
  return (
    <SEditCardToolbar>
      <div>
        {/* palette */}
        <ButtonRound size={34}>
          <Icon.Palette />
        </ButtonRound>
        {/* tag */}
        <ButtonRound size={34}>
          <Icon.LabelOutline />
        </ButtonRound>
        {/* checkbox */}
        <ButtonRound size={34}>
          <Icon.CheckboxOutline />
        </ButtonRound>
        {/* cancel checkbox */}
        <ButtonRound size={34}>
          <Icon.CancelCheckboxOutline />
        </ButtonRound>
        {/* image */}
        <ButtonRound size={34}>
          <Icon.Image />
        </ButtonRound>
        {/* copy */}
        <ButtonRound size={34}>
          <Icon.Copy />
        </ButtonRound>
        {/* archivee */}
        <ButtonRound size={34}>
          <Icon.Archive />
        </ButtonRound>
      </div>
      {/* <div className=''>關閉</div> */}
    </SEditCardToolbar>
  );
};

export default EditCardToolbar;
