import {
  SLinkItemImg,
  SLinkItemInfo,
  SLinkItemTitle,
  SLinkItemUrl,
  SLinkItemShare,
} from 'components/UI/LinkItem/style.js';

const LinkItem = ({ link, isOnlyLinks = false, children = null }) => {
  return (
    <>
      <SLinkItemImg src={link.image} alt={link.title} isOnlyLinks={isOnlyLinks} />
      <SLinkItemInfo isOnlyLinks={isOnlyLinks}>
        <SLinkItemTitle>{link.title}</SLinkItemTitle>
        <SLinkItemUrl>{link.url}</SLinkItemUrl>
      </SLinkItemInfo>
      <SLinkItemShare>
        {/* actions */}
        {children}
      </SLinkItemShare>
    </>
  );
};

export default LinkItem;
