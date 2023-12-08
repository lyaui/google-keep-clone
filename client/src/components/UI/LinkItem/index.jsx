import DEFAULT_LINK_IMG from '@/assets/images/default-link.png';
import {
  SLinkItem,
  SLinkItemImg,
  SLinkItemInfo,
  SLinkItemTitle,
  SLinkItemUrl,
} from '@/components/UI/LinkItem/style.jsx';

const LinkItem = ({ link, isOnlyLinks = false, children = null }) => {
  const { host: urlText } = new URL(link.url);

  return (
    <SLinkItem>
      <SLinkItemImg
        src={link.image ? link.image : DEFAULT_LINK_IMG}
        alt={link.title}
        style={{ '--width': isOnlyLinks ? '88px' : '54px' }}
      />
      <SLinkItemInfo
        style={{
          '--width': isOnlyLinks ? 'calc(100% - 120px)' : 'calc(100% - 88px)',
        }}
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
