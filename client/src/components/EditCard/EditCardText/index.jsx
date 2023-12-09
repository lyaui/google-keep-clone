import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Autolinker from 'autolinker';
import ContentEditable from 'react-contenteditable';

import { ROUTER_PATH } from '@/routes';
import { addLinksInfo } from '@/store/memosSlice/memos-action';

function EditCardText({ text, updateTextHandler }) {
  const dispatch = useDispatch();
  const { search, pathname } = useLocation();
  const editQuery = !!new URLSearchParams(search).get('edit');
  const [links, setLinks] = useState([]);

  useEffect(() => {
    if (links.length === 0) return;
    if (editQuery || pathname === ROUTER_PATH.MEMO) {
      (async () => {
        await dispatch(addLinksInfo({ links }));
      })();
    }
  }, [links, editQuery, pathname, dispatch]);

  const textChangeHandler = (e) => {
    const linkedText = Autolinker.link(e.target.value, {
      stripPrefix: false,
    });
    const matches = Autolinker.parse(e.target.value, {
      urls: true,
    });
    setLinks((preState) => [...preState, ...matches.map((link) => link.url)]);
    updateTextHandler(linkedText);
  };

  const textPasteHandler = (e) => {
    const paste = (e.clipboardData || window.clipboardData).getData(
      'text/plain'
    );
    const selection = window.getSelection();
    if (!selection.rangeCount) return false;
    selection.deleteFromDocument();
    selection.getRangeAt(0).insertNode(document.createTextNode(paste));
    e.preventDefault();
  };

  const textDropHandler = (e) => {
    e.preventDefault();
  };

  return (
    <ContentEditable
      id="contentEdit"
      html={text}
      onChange={textChangeHandler}
      onPaste={textPasteHandler}
      onDrop={textDropHandler}
    ></ContentEditable>
  );
}

export default EditCardText;
