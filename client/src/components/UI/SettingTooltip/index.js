import CustomTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import { useUIContextVal } from 'contexts/ui-context.js';

const SettingTooltip = ({ children, renderElement }) => {
  const { CTX_TOOLTIP } = useUIContextVal();

  return (
    <CustomTippy
      render={() => renderElement}
      visible={CTX_TOOLTIP.isTooltipVisible}
      interactive={true}
      onClickOutside={CTX_TOOLTIP.hideTooltipHandler}
    >
      {children}
    </CustomTippy>
  );
};

export default SettingTooltip;
