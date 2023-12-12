import { v4 as uuid } from 'uuid';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import type { MemoTask } from '@/types';
import { memosActions } from '@/store/memosSlice';
import { useAppDispatch, useAppSelector } from '@/hooks/useReduxStore';
import { TOOLTIP_TEXT } from '@/constants/tooltipText';
import * as Icon from '@/components/UI/Icon';
import Button from '@/components/UI/Buttons';

function EditCardTaskButton() {
  const dispatch = useAppDispatch();
  const { memo } = useAppSelector((state) => state.memos);

  let rawTasksList = memo.content.split('</div><div>') || [];
  rawTasksList = [
    ...rawTasksList[0].split('<div>'),
    ...rawTasksList.slice(1),
  ].filter((item) => item !== '<br>' && item !== '<br></div>');

  if (rawTasksList.length === 1 && rawTasksList[0].trim() === '') {
    rawTasksList = [];
  } else {
    rawTasksList = rawTasksList.map((item) => item.replace('</div>', ''));
  }

  const toggleTaskHandler = () => {
    const tasks: MemoTask[] = rawTasksList.map((item) => ({
      id: uuid(),
      isCompleted: false,
      name: item,
    }));

    dispatch(
      memosActions.updateMemo({
        isTaskList: true,
        tasks,
        content: '',
      })
    );
  };

  return (
    <Tippy content={TOOLTIP_TEXT.CHECKBOX}>
      <Button size="medium" onClick={toggleTaskHandler}>
        <Icon.CheckboxOutline />
      </Button>
    </Tippy>
  );
}

export default EditCardTaskButton;
