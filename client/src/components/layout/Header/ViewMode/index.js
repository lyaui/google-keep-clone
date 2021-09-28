import { Fragment } from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { TOOLTIP_TEXT } from 'constants/tooltipText.js';
import { useUIContextVal } from 'contexts/ui-context.js';
import { VIEW_MODE } from 'constants/UI.js';
import * as Icon from 'components/UI/Icon.js';
import { ButtonRound } from 'components/UI/Buttons/index.js';

const ViewMode = () => {
  const { CTX_VIEW_MODE } = useUIContextVal();

  return (
    <Fragment>
      {CTX_VIEW_MODE.viewMode === VIEW_MODE.GRID && (
        <Tippy content={TOOLTIP_TEXT.VIEW_GRID}>
          <ButtonRound size={40} onClick={CTX_VIEW_MODE.setListHandler}>
            <Icon.Grid />
          </ButtonRound>
        </Tippy>
      )}
      {CTX_VIEW_MODE.viewMode === VIEW_MODE.LIST && (
        <Tippy content={TOOLTIP_TEXT.VIEW_LIST}>
          <ButtonRound size={40} onClick={CTX_VIEW_MODE.setGridHandler}>
            <Icon.List />
          </ButtonRound>
        </Tippy>
      )}
    </Fragment>
  );
};

export default ViewMode;
