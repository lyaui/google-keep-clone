import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { TOOLTIP_TEXT } from 'constants/tooltipText.js';
import * as Icon from 'components/UI/Icon/index.js';
import { ButtonRound } from 'components/UI/Buttons/index.js';
import EditCardColorButton from 'components/ActionButtons/EditCardColorButton';
import EditCardLabelsButton from 'components/ActionButtons/EditCardLabelsButton';
import EditCardTaskButton from 'components/ActionButtons/EditCardTaskButton';
import UploadImageButton from 'components/ActionButtons/UploadImageButton';
import { SEditCardToolbar } from 'components/EditCard/EditCardToolbar/style.js';

const EditCardToolbar = () => {
  return (
    <SEditCardToolbar>
      <div>
        {/* palette */}
        <EditCardColorButton />
        {/* labels */}
        <EditCardLabelsButton />
        {/* checkbox */}
        <EditCardTaskButton />
        {/* cancel checkbox */}
        <Tippy content={TOOLTIP_TEXT.CANCEL_CHECKBOX}>
          <ButtonRound size={34}>
            <Icon.CancelCheckboxOutline />
          </ButtonRound>
        </Tippy>
        {/* image */}
        <UploadImageButton />
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
