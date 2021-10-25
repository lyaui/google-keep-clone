import DEFAULT_LINK_IMG from 'assets/images/default-link.png';
import {
  SLinkItem,
  SLinkItemImg,
  SLinkItemInfo,
  SLinkItemTitle,
  SLinkItemUrl,
  SLinkItemShare,
} from 'components/UI/LinkItem/style.js';

const LinkItem = ({ link, isOnlyLinks = false, children = null }) => {
  const { host: urlText } = new URL(link.url);

  return (
    <SLinkItem>
      <SLinkItemImg
        src={link.image ? link.image : DEFAULT_LINK_IMG}
        alt={link.title}
        isOnlyLinks={isOnlyLinks}
      />
      <SLinkItemInfo isOnlyLinks={isOnlyLinks}>
        <SLinkItemTitle>{link.title}</SLinkItemTitle>
        <SLinkItemUrl>{urlText}</SLinkItemUrl>
      </SLinkItemInfo>
      <SLinkItemShare>
        {/* actions */}
        {children}
      </SLinkItemShare>
    </SLinkItem>
  );
};

export default LinkItem;
