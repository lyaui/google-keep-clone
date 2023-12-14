import { useState, useEffect } from 'react';
import type { ClipboardEvent, DragEvent } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Autolinker from 'autolinker';
import ContentEditable, {
  type ContentEditableEvent,
} from 'react-contenteditable';

import { ROUTER_PATH } from '@/routes';
import { addLinksInfo } from '@/store/memosSlice/memos-action';

interface EditMemoTextProps {
  text: string;
  updateTextHandler: (text: string) => void;
}

function EditMemoText({ text, updateTextHandler }: EditMemoTextProps) {
  const dispatch = useDispatch();
  const { search, pathname } = useLocation();
  const editQuery = !!new URLSearchParams(search).get('edit');
  const [links, setLinks] = useState<string[]>([]);

  useEffect(() => {
    if (links.length === 0) return;
    if (editQuery || pathname === ROUTER_PATH.MEMO) {
      (async () => {
        await dispatch(addLinksInfo({ links }));
      })();
    }
  }, [links, editQuery, pathname, dispatch]);

  const textInputHandler = (event: ContentEditableEvent) => {
    const linkedText = Autolinker.link(event.target.value, {
      stripPrefix: false,
    });
    const matches = Autolinker.parse(event.target.value, {
      urls: true,
    });

    setLinks((preState) => [
      ...preState,
      // @ts-ignore
      ...matches.map((_link) => _link.url),
    ]);
    updateTextHandler(linkedText);
  };

  const textPasteHandler = (event: ClipboardEvent<HTMLDivElement>) => {
    const paste = event.clipboardData.getData('text/plain');
    const selection = window.getSelection();
    if (!selection?.rangeCount) return false;
    selection.deleteFromDocument();
    selection.getRangeAt(0).insertNode(document.createTextNode(paste));
    event.preventDefault();
  };

  const textDropHandler = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  return (
    <ContentEditable
      id="contentEdit"
      html={text}
      onChange={textInputHandler}
      onPaste={textPasteHandler}
      onDrop={textDropHandler}
    ></ContentEditable>
  );
}

export default EditMemoText;
