import type { ReactNode } from 'react';

import type { MemoLink } from '@/types';
import DEFAULT_LINK_IMG from '/public/assets/images/default-link.png';
import {
  SLinkItem,
  SLinkItemImg,
  SLinkItemInfo,
  SLinkItemTitle,
  SLinkItemUrl,
} from '@/components/UI/LinkItem/style';
interface LinkItemProps {
  link: MemoLink;
  isOnlyLinks?: boolean;
  children?: ReactNode;
}

const LinkItem = ({
  link,
  isOnlyLinks = false,
  children = null,
}: LinkItemProps) => {
  const { host: urlText } = new URL(link.url);

  return (
    <SLinkItem>
      <SLinkItemImg
        src={link.image ? link.image : DEFAULT_LINK_IMG}
        alt={link.title}
        width={isOnlyLinks ? 88 : 54}
      />
      <SLinkItemInfo
        width={isOnlyLinks ? 'calc(100% - 120px)' : 'calc(100% - 88px)'}
      >
        <SLinkItemTitle>{link.title}</SLinkItemTitle>
        <SLinkItemUrl>{urlText}</SLinkItemUrl>
      </SLinkItemInfo>
      {/* actions */}
      {children}
    </SLinkItem>
  );
};

export default LinkItem;
