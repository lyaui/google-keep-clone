import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { memosActions } from 'store/memosSlice';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { TOOLTIP_TEXT } from 'constants/tooltipText.js';
import * as Icon from 'components/UI/Icon/index.js';
import { ButtonRound } from 'components/UI/Buttons/index.js';

const EditCardTaskButton = () => {
  const dispatch = useDispatch();
  const { memo } = useSelector((state) => state.memos);

  let tasksList = memo.content.split('</div><div>') || [];
  tasksList = [...tasksList[0].split('<div>'), ...tasksList.slice(1)].filter(
    (item) => item !== '<br>' && item !== '<br></div>',
  );

  if (tasksList.length === 1 && tasksList[0].trim() === '') {
    tasksList = [];
  } else {
    tasksList = tasksList.map((item) => ({
      id: uuid(),
      isCompleted: false,
      name: item.replace('</div>', ''),
    }));
  }

  const toggleTaskHandler = () =>
    dispatch(memosActions.updateMemo({ isTaskList: true, tasks: tasksList }));

  return (
    <Tippy content={TOOLTIP_TEXT.CHECKBOX}>
      <ButtonRound size={34} onClick={toggleTaskHandler}>
        <Icon.CheckboxOutline />
      </ButtonRound>
    </Tippy>
  );
};

export default EditCardTaskButton;
