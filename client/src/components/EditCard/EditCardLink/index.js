import { useState, useEffect } from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { TOOLTIP_TEXT } from 'constants/tooltipText.js';
import * as Icon from 'components/UI/Icon/index.js';
import { ButtonRound } from 'components/UI/Buttons/index.js';
import LinkItem from 'components/UI/LinkItem';
import { SEditCardLink, SEditCardLinkButton } from 'components/EditCard/EditCardLink/style.js';

const EditCardLink = () => {
  const defaultLinks = 3;
  const [links, setLinks] = useState([]);
  const [showLinksNum, setShowLinksNum] = useState(defaultLinks);
  const numOfMoreLink = links.length - defaultLinks;

  useEffect(() => {
    const DEFAULT_LINKS = [
      {
        title: 'iT 邦幫忙::一起幫忙解決難題，拯救 IT 人的一天',
        url: 'www.ithelp.ithome.com.tw',
        sourceUrl: 'www.ithelp.ithome.com.tw',
        image: 'https://ithelp.ithome.com.tw/storage/image/fbpic.jpg',
      },
      {
        title: 'iT 邦幫忙::一起幫忙解決難題，拯救 IT 人的一天',
        url: 'www.ithelp.ithome.com.tw',
        sourceUrl: 'www.ithelp.ithome.com.tw',
        image: 'https://ithelp.ithome.com.tw/storage/image/fbpic.jpg',
      },
      {
        title: 'iT 邦幫忙::一起幫忙解決難題，拯救 IT 人的一天',
        url: 'www.ithelp.ithome.com.tw',
        sourceUrl: 'www.ithelp.ithome.com.tw',
        image: 'https://ithelp.ithome.com.tw/storage/image/fbpic.jpg',
      },
      {
        title: 'iT 邦幫忙::一起幫忙解決難題，拯救 IT 人的一天',
        url: 'www.ithelp.ithome.com.tw',
        sourceUrl: 'www.ithelp.ithome.com.tw',
        image: 'https://ithelp.ithome.com.tw/storage/image/fbpic.jpg',
      },
    ];
    setLinks(DEFAULT_LINKS);
  }, []);

  const clickShowMoreHandler = () => {
    setShowLinksNum(links.length);
  };

  const clickShowLessHandler = () => {
    setShowLinksNum(defaultLinks);
  };

  return (
    <div>
      {links.slice(0, showLinksNum).map((link, index) => (
        <SEditCardLink key={index} index={index}>
          <LinkItem link={link}>
            {/* go share link */}
            <Tippy content={TOOLTIP_TEXT.PREVIEW_URL}>
              <ButtonRound size={34} onClick={() => {}}>
                <Icon.MoreVert />
              </ButtonRound>
            </Tippy>
          </LinkItem>
        </SEditCardLink>
      ))}

      {numOfMoreLink > 0 && showLinksNum === defaultLinks && (
        <SEditCardLinkButton onClick={clickShowMoreHandler}>
          還有個 {numOfMoreLink} 連結
        </SEditCardLinkButton>
      )}
      {numOfMoreLink > 0 && showLinksNum !== defaultLinks && (
        <SEditCardLinkButton onClick={clickShowLessHandler}>較少</SEditCardLinkButton>
      )}
    </div>
  );
};

export default EditCardLink;
