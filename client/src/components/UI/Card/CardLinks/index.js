import * as Icon from 'components/UI/Icon.js';
import { ButtonRound } from 'components/UI/Buttons/index.js';
import LinkItem from 'components/UI/LinkItem';
import { SCardLink, SCardLinkMore } from 'components/UI/Card/CardLinks/style.js';

const CardLinks = ({ links, isOnlyLinks }) => {
  const showLinksNum = 3;
  const numOfMoreLink = links.length - showLinksNum;

  const goShareLink = (url) => () => {
    window.open(`https://${url}`, '_blank').focus();
  };

  return (
    <div>
      {links.slice(0, showLinksNum).map((link, index) => (
        <SCardLink index={index} isOnlyLinks={isOnlyLinks}>
          <LinkItem key={index} link={link} isOnlyLinks={isOnlyLinks}>
            {/* go share link */}
            <ButtonRound size={28} onClick={goShareLink(link.url)}>
              <Icon.Share />
            </ButtonRound>
          </LinkItem>
        </SCardLink>
      ))}
      {numOfMoreLink > 0 && <SCardLinkMore>還有個 {numOfMoreLink} 連結</SCardLinkMore>}
    </div>
  );
};

export default CardLinks;
