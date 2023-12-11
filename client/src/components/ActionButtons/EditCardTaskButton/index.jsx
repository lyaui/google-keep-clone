import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { memosActions } from '@/store/memosSlice';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { TOOLTIP_TEXT } from '@/constants/tooltipText';
import * as Icon from '@/components/UI/Icon';
import Button from '@/components/UI/Buttons';

const EditCardTaskButton = () => {
  const dispatch = useDispatch();
  const { memo } = useSelector((state) => state.memos);

  let tasksList = memo.content.split('</div><div>') || [];
  tasksList = [...tasksList[0].split('<div>'), ...tasksList.slice(1)].filter(
    (item) => item !== '<br>' && item !== '<br></div>'
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
    dispatch(
      memosActions.updateMemo({
        isTaskList: true,
        tasks: tasksList,
        content: '',
      })
    );

  return (
    <Tippy content={TOOLTIP_TEXT.CHECKBOX}>
      <Button size="medium" onClick={toggleTaskHandler}>
        <Icon.CheckboxOutline />
      </Button>
    </Tippy>
  );
};

export default EditCardTaskButton;
