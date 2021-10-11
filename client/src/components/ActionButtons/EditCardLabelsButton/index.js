import { useState } from 'react';
import CustomTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { TOOLTIP_TEXT } from 'constants/tooltipText.js';
import * as Icon from 'components/UI/Icon/index.js';
import { ButtonRound } from 'components/UI/Buttons/index.js';
import {
  SEditCardLabels,
  SSearchLabel,
  SLabels,
  SLabel,
} from 'components/ActionButtons/EditCardLabelsButton/style.js';

const EditCardLabelsButton = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const labels = [
    {
      id: 'test',
      name: 'moremoremoremoremoremoremoremoremoremoremore',
      isSelected: false,
    },
    { id: 'l1', name: 'cyan', isSelected: false },
    { id: 'l2', name: 'teal', isSelected: true },
    { id: 'l3', name: 'magenta', isSelected: false },
    { id: 'l4', name: 'teal', isSelected: false },
    { id: 'l5', name: 'coral', isSelected: false },
    { id: 'l6', name: 'salmon', isSelected: false },
    { id: 'l7', name: 'olive', isSelected: true },
    { id: 'l8', name: 'aqua', isSelected: false },
    { id: 'l9', name: 'coral', isSelected: false },
  ];

  const editLabels = (
    <SEditCardLabels width={200}>
      <div>為記事加標籤</div>
      <SSearchLabel>
        <input type='text' placeholder='輸入標籤名稱' maxLength='50' />
        <Icon.Search />
      </SSearchLabel>

      <SLabels>
        {labels.map((label) => (
          <SLabel key={label.id}>
            {label.isSelected ? <Icon.CheckboxOutline /> : <Icon.EmptyCheckbox />}
            <span>{label.name}</span>
          </SLabel>
        ))}
      </SLabels>
    </SEditCardLabels>
  );
  return (
    <CustomTippy
      render={() => editLabels}
      interactive={true}
      visible={showTooltip}
      onClickOutside={() => setShowTooltip(false)}
    >
      <Tippy content={TOOLTIP_TEXT.LABEL}>
        <ButtonRound size={34} onClick={() => setShowTooltip(true)}>
          <Icon.LabelOutline />
        </ButtonRound>
      </Tippy>
    </CustomTippy>
  );
};

export default EditCardLabelsButton;
