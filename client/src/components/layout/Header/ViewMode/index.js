import { Fragment } from 'react';
import { useUIContextVal } from 'contexts/ui-context.js';
import { VIEW_MODE } from 'constants/UI.js';
import * as Icon from 'components/UI/Icon.js';
import { ButtonRound } from 'components/UI/Buttons/index.js';

const ViewMode = () => {
  const { viewMode, setGridHandler, setListHandler } = useUIContextVal();

  return (
    <Fragment>
      {viewMode === VIEW_MODE.GRID && (
        <ButtonRound size={40} onClick={setListHandler}>
          <Icon.Grid />
        </ButtonRound>
      )}
      {viewMode === VIEW_MODE.LIST && (
        <ButtonRound size={40} onClick={setGridHandler}>
          <Icon.List />
        </ButtonRound>
      )}
    </Fragment>
  );
};

export default ViewMode;
