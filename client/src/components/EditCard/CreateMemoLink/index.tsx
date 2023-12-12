import { useState } from 'react';
import type { MouseEvent } from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import { useUpdateMemo } from '@/hooks/updateMemo-hook';
import { TOOLTIP_TEXT } from '@/constants/tooltipText';
import * as Icon from '@/components/UI/Icon';
import Button from '@/components/UI/Buttons';
import LinkItem from '@/components/UI/LinkItem';
import {
  SEditCardLink,
  SEditCardLinkButton,
} from '@/components/EditCard/CreateMemoLink/style';

const CreateMemoLink = ({ id }: { id?: string }) => {
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

  const removeLinkHandler =
    (url: string) => (event: MouseEvent<HTMLButtonElement>) => {
      event.stopPropagation();
      const updatedLinks = currentMemo.links.filter((link) => link.url !== url);
      dispatchUpdateMemo({ links: updatedLinks });
    };

  const goShareLink = (url: string) => (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    if (!window) return;
    window.open(url, '_blank')?.focus();
  };

  return (
    <div>
      {currentMemo.links.slice(0, showLinksNum).map((_link) => (
        <SEditCardLink key={_link.url} onClick={goShareLink(_link.url)}>
          <LinkItem link={_link}>
            {/* go share link */}
            <Tippy content={TOOLTIP_TEXT.PREVIEW_URL}>
              <Button size="small" onClick={removeLinkHandler(_link.url)}>
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

export default CreateMemoLink;
