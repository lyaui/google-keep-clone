import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import { useAppDispatch, useAppSelector } from '@/hooks/useReduxStore';
import { memosActions } from '@/store/memosSlice';
import { TOOLTIP_TEXT } from '@/constants/tooltipText';
import * as Icon from '@/components/UI/Icon';
import Button from '@/components/UI/Buttons';

const EditCancelTaskButton = () => {
  const dispatch = useAppDispatch();
  const { memo } = useAppSelector((state) => state.memos);
  const { tasks } = memo;

  const content = tasks.map((task) => task.name).join('</div><div>');

  const toggleTaskHandler = () =>
    dispatch(
      memosActions.updateMemo({ isTaskList: false, tasks: [], content })
    );

  return (
    <Tippy content={TOOLTIP_TEXT.CANCEL_CHECKBOX}>
      <Button size="medium" onClick={toggleTaskHandler}>
        <Icon.CancelCheckboxOutline />
      </Button>
    </Tippy>
  );
};

export default EditCancelTaskButton;
