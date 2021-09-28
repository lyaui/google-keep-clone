import * as Icon from 'components/UI/Icon.js';
import { SLabel } from 'components/UI/Label/style.js';

const Label = ({ children, isShowMoreLabel = false }) => {
  const clickRemoveHandler = (e) => {
    e.stopPropagation();
  };

  return (
    <SLabel isShowMoreLabel={isShowMoreLabel}>
      {children}
      {!isShowMoreLabel && <Icon.Clear onClick={clickRemoveHandler} />}
    </SLabel>
  );
};

export default Label;
