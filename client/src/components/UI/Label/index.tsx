import type { MouseEventHandler } from 'react';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { TOOLTIP_TEXT } from '@/constants/tooltipText';
import * as Icon from '@/components/UI/Icon';
import { SLabel, SLabelButton } from '@/components/UI/Label/style.jsx';

interface LabelProps {
  variant?: 'round' | 'square';
  children: string;
  onDelete?: MouseEventHandler<SVGElement>;
}

function Label({ children, variant = 'round', onDelete }: LabelProps) {
  return (
    <SLabel variant={variant}>
      {children}
      {onDelete && (
        <Tippy content={TOOLTIP_TEXT.CANCEL_LABEL}>
          <SLabelButton>
            <Icon.Clear onClick={onDelete} />
          </SLabelButton>
        </Tippy>
      )}
    </SLabel>
  );
}

export default Label;
