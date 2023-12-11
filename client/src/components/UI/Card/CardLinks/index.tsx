import type { MouseEvent } from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import type { MemoLink } from '@/types';
import { TOOLTIP_TEXT } from '@/constants/tooltipText';
import * as Icon from '@/components/UI/Icon';
import Button from '@/components/UI/Buttons';
import LinkItem from '@/components/UI/LinkItem';
import {
  SCardLinks,
  SCardLink,
  SCardLinkMore,
} from '@/components/UI/Card/CardLinks/style';

interface CardLinksProps {
  links: MemoLink[];
  isOnlyLinks?: boolean;
  limit?: number;
}

const CardLinks = ({
  links = [],
  isOnlyLinks = false,
  limit = 3,
}: CardLinksProps) => {
  const numOfMoreLink = links.length - limit;

  const goShareLink =
    (url: string) => (event: MouseEvent<HTMLButtonElement>) => {
      event.stopPropagation();
      if (!window) return;
      window.open(url, '_blank')?.focus();
    };

  return (
    <SCardLinks isOnlyLinks={isOnlyLinks}>
      {links.slice(0, limit).map((link, index) => (
        <SCardLink key={link._id} isOnlyLinks={isOnlyLinks} index={index}>
          <LinkItem link={link} isOnlyLinks={isOnlyLinks}>
            {/* go share link */}
            <Tippy content={TOOLTIP_TEXT.GO_URL}>
              <Button size="small" onClick={goShareLink(link.url)}>
                <Icon.Share />
              </Button>
            </Tippy>
          </LinkItem>
        </SCardLink>
      ))}
      {numOfMoreLink > 0 && (
        <SCardLinkMore>還有個 {numOfMoreLink} 連結</SCardLinkMore>
      )}
    </SCardLinks>
  );
};

export default CardLinks;
