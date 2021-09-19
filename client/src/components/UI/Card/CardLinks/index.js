import * as Icon from 'components/UI/Icon.js';
import { ButtonRound } from 'components/UI/Buttons/index.js';
import {
  SCardLinks,
  SCardLink,
  SCardLinkImg,
  SCardLinkInfo,
  SCardLinkTitle,
  SCardLinkUrl,
  SCardLinkShare,
  SCardLinkMore,
} from 'components/UI/Card/CardLinks/style.js';

const CardLinks = ({ links, isOnlyLinks }) => {
  const showLinksNum = 3;
  const numOfMoreLink = links.length - showLinksNum;

  const goShareLink = (url) => {
    window.open(`https://${url}`, '_blank').focus();
  };

  return (
    <SCardLinks>
      {links.slice(0, showLinksNum).map((link, index) => (
        <SCardLink key={index} index={index} isOnlyLinks={isOnlyLinks}>
          <SCardLinkImg src={link.image} alt={link.title} isOnlyLinks={isOnlyLinks} />
          <SCardLinkInfo isOnlyLinks={isOnlyLinks}>
            <SCardLinkTitle>{link.title}</SCardLinkTitle>
            <SCardLinkUrl>{link.url}</SCardLinkUrl>
          </SCardLinkInfo>
          <SCardLinkShare>
            <ButtonRound size={28} onClick={() => goShareLink(link.url)}>
              <Icon.Share />
            </ButtonRound>
          </SCardLinkShare>
        </SCardLink>
      ))}

      {numOfMoreLink > 0 && <SCardLinkMore>還有個 {numOfMoreLink} 連結</SCardLinkMore>}
    </SCardLinks>
  );
};

export default CardLinks;
