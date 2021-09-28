import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { TOOLTIP_TEXT } from 'constants/tooltipText.js';
import * as Icon from 'components/UI/Icon.js';
import { ButtonRound } from 'components/UI/Buttons/index.js';
import LinkItem from 'components/UI/LinkItem';
import { SCardLink, SCardLinkMore } from 'components/UI/Card/CardLinks/style.js';

const CardLinks = ({ links, isOnlyLinks }) => {
  const showLinksNum = 3;
  const numOfMoreLink = links.length - showLinksNum;

  const goShareLink = (url) => (e) => {
    e.stopPropagation();
    window.open(`https://${url}`, '_blank').focus();
  };

  return (
    <div>
      {links.slice(0, showLinksNum).map((link, index) => (
        <SCardLink key={index} index={index} isOnlyLinks={isOnlyLinks}>
          <LinkItem link={link} isOnlyLinks={isOnlyLinks}>
            {/* go share link */}
            <Tippy content={TOOLTIP_TEXT.GO_URL}>
              <ButtonRound size={28} onClick={goShareLink(link.url)}>
                <Icon.Share />
              </ButtonRound>
            </Tippy>
          </LinkItem>
        </SCardLink>
      ))}
      {numOfMoreLink > 0 && <SCardLinkMore>還有個 {numOfMoreLink} 連結</SCardLinkMore>}
    </div>
  );
};

export default CardLinks;
