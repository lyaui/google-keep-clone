import CustomTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { useUIContextVal } from 'contexts/ui-context.js';

const CustomTooltip = ({ children, renderElement = null, name = null, text = '' }) => {
  const { CTX_TOOLTIP } = useUIContextVal();

  return (
    <CustomTippy
      render={() => renderElement}
      visible={CTX_TOOLTIP.tooltipName === name}
      interactive={true}
      onClickOutside={CTX_TOOLTIP.hideTooltipHandler}
    >
      <Tippy content={text}>{children}</Tippy>
    </CustomTippy>
  );
};

export default CustomTooltip;
