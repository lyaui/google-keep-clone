import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { TOOLTIP_TEXT } from 'constants/tooltipText.js';
import * as Icon from 'components/UI/Icon.js';
import { ButtonRound } from 'components/UI/Buttons/index.js';
import { SEditCardToolbar } from 'components/EditCard/EditCardToolbar/style.js';

const EditCardToolbar = () => {
  return (
    <SEditCardToolbar>
      <div>
        {/* palette */}
        <Tippy content={TOOLTIP_TEXT.PALETTE}>
          <ButtonRound size={34}>
            <Icon.Palette />
          </ButtonRound>
        </Tippy>

        {/* tag */}
        <Tippy content={TOOLTIP_TEXT.LABEL}>
          <ButtonRound size={34}>
            <Icon.LabelOutline />
          </ButtonRound>
        </Tippy>

        {/* checkbox */}
        <Tippy content={TOOLTIP_TEXT.CHECKBOX}>
          <ButtonRound size={34}>
            <Icon.CheckboxOutline />
          </ButtonRound>
        </Tippy>

        {/* cancel checkbox */}
        <Tippy content={TOOLTIP_TEXT.CANCEL_CHECKBOX}>
          <ButtonRound size={34}>
            <Icon.CancelCheckboxOutline />
          </ButtonRound>
        </Tippy>

        {/* image */}
        <Tippy content={TOOLTIP_TEXT.IMAGE}>
          <ButtonRound size={34}>
            <Icon.Image />
          </ButtonRound>
        </Tippy>

        {/* copy */}
        <Tippy content={TOOLTIP_TEXT.COPY}>
          <ButtonRound size={34}>
            <Icon.Copy />
          </ButtonRound>
        </Tippy>

        {/* archivee */}
        <Tippy content={TOOLTIP_TEXT.ARCHIVE}>
          <ButtonRound size={34}>
            <Icon.Archive />
          </ButtonRound>
        </Tippy>
      </div>
      {/* <div className=''>關閉</div> */}
    </SEditCardToolbar>
  );
};

export default EditCardToolbar;
