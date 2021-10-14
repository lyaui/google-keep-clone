import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { TOOLTIP_TEXT } from 'constants/tooltipText.js';
import * as Icon from 'components/UI/Icon/index.js';
import { SLabel, SLabelIcon, SLabelEditInput } from 'components/EditLabels/style.js';

const SideMenuLabel = ({ label, isSideMenu }) => {
  const deleteLabelHandler = () => {};
  const toggleInputHandler = () => {};

  return (
    <SLabel key={label.id} isSideMenu={isSideMenu}>
      <SLabelIcon>
        <Icon.Label name={'label'} />
      </SLabelIcon>
      {/* delete */}
      <Tippy content={TOOLTIP_TEXT.DELETE_LABEL}>
        <SLabelIcon onClick={deleteLabelHandler}>
          <Icon.Delete name={'delete'} />
        </SLabelIcon>
      </Tippy>
      <span onClick={toggleInputHandler}>{label.name}</span>
      <SLabelEditInput type='text' value={label.name} placeholder='輸入標籤名稱' />
      {/* edit */}
      <Tippy content={TOOLTIP_TEXT.RENAME_LABEL}>
        <SLabelIcon>
          <Icon.Edit />
        </SLabelIcon>
      </Tippy>
    </SLabel>
  );
};

export default SideMenuLabel;
