import { useState, useEffect } from 'react';
import Autolinker from 'autolinker';
import ContentEditable from 'react-contenteditable';

const EditCardText = ({ fetchTextHandler, updateTextHandler }) => {
  const [text, setText] = useState('');
  const [links, setLinks] = useState([]);

  useEffect(() => {
    const textContent = fetchTextHandler();
    setText(textContent);
  }, [fetchTextHandler]);

  useEffect(() => {
    updateTextHandler(JSON.stringify(text));
  }, [updateTextHandler, text]);

  const textChangeHandler = (e) => {
    const linkedText = Autolinker.link(e.target.value, {
      stripPrefix: false,
    });
    const matches = Autolinker.parse(e.target.value, {
      urls: true,
    });
    setLinks(matches.map((link) => link.url));
    setText(linkedText);
  };

  const textPasteHandler = (e) => {
    const paste = (e.clipboardData || window.clipboardData).getData('text/plain');
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
      id='contentEdit'
      html={text}
      onChange={textChangeHandler}
      onPaste={textPasteHandler}
      onDrop={textDropHandler}
    ></ContentEditable>
  );
};

export default EditCardText;
