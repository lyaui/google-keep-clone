import { useState } from 'react';
import { useUpdateMemo } from '@/hooks/updateMemo-hook.js';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { TOOLTIP_TEXT } from '@/constants/tooltipText';
import * as Icon from '@/components/UI/Icon';
import Button from '@/components/UI/Buttons';
import LinkItem from '@/components/UI/LinkItem';
import {
  SEditCardLink,
  SEditCardLinkButton,
} from '@/components/EditCard/EditCardLink/style.jsx';

const EditCardLink = ({ id }) => {
  const { currentMemo, dispatchUpdateMemo } = useUpdateMemo(id);

  const defaultLinks = 3;
  const [showLinksNum, setShowLinksNum] = useState(defaultLinks);
  const numOfMoreLink = currentMemo.links.length - defaultLinks;

  const clickShowMoreHandler = () => {
    setShowLinksNum(currentMemo.links.length);
  };

  const clickShowLessHandler = () => {
    setShowLinksNum(defaultLinks);
  };

  const removeLinkHandler = (url) => (e) => {
    e.stopPropagation();
    const updatedLinks = currentMemo.links.filter((link) => link.url !== url);
    dispatchUpdateMemo({ links: updatedLinks });
  };

  const goShareLink = (url) => (e) => {
    e.stopPropagation();
    window.open(url, '_blank').focus();
  };

  return (
    <div>
      {currentMemo.links.slice(0, showLinksNum).map((link, index) => (
        <SEditCardLink
          key={index}
          index={index}
          onClick={goShareLink(link.url)}
        >
          <LinkItem link={link}>
            {/* go share link */}
            <Tippy content={TOOLTIP_TEXT.PREVIEW_URL}>
              <Button size="small" onClick={removeLinkHandler(link.url)}>
                <Icon.Clear />
              </Button>
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
        <SEditCardLinkButton onClick={clickShowLessHandler}>
          較少
        </SEditCardLinkButton>
      )}
    </div>
  );
};

export default EditCardLink;
