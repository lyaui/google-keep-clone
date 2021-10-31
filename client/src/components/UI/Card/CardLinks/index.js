import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { TOOLTIP_TEXT } from 'constants/tooltipText.js';
import * as Icon from 'components/UI/Icon/index.js';
import { ButtonRound } from 'components/UI/Buttons/index.js';
import LinkItem from 'components/UI/LinkItem';
import { SCardLinks, SCardLink, SCardLinkMore } from 'components/UI/Card/CardLinks/style.js';

const CardLinks = ({ links, isOnlyLinks }) => {
  const showLinksNum = 3;
  const numOfMoreLink = links.length - showLinksNum;

  const goShareLink = (url) => (e) => {
    e.stopPropagation();
    window.open(url, '_blank').focus();
  };

  return (
    <SCardLinks
      style={{
        '--rounded': isOnlyLinks
          ? 'var(--rounded-lg)'
          : '0 0px var(--rounded-lg) var(--rounded-lg)',
      }}
    >
      {links.slice(0, showLinksNum).map((link, index) => (
        <SCardLink
          key={index}
          style={{
            '--height': isOnlyLinks ? '88px' : '56px',
            '--border': !index && isOnlyLinks ? 'unset' : '1px solid var(--color-link-border)',
          }}
        >
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
    </SCardLinks>
  );
};

export default CardLinks;
