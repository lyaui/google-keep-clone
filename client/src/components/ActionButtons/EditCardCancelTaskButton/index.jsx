import { useDispatch, useSelector } from 'react-redux';
import { memosActions } from '@/store/memosSlice';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { TOOLTIP_TEXT } from '@/constants/tooltipText.js';
import * as Icon from '@/components/UI/Icon/index.jsx';
import { ButtonRound } from '@/components/UI/Buttons/index.jsx';

const EditCardCancelTaskButton = () => {
  const dispatch = useDispatch();
  const { memo } = useSelector((state) => state.memos);
  const { tasks } = memo;

  const content = tasks.map((task) => task.name).join('</div><div>');

  const toggleTaskHandler = () =>
    dispatch(
      memosActions.updateMemo({ isTaskList: false, tasks: [], content })
    );

  return (
    <Tippy content={TOOLTIP_TEXT.CANCEL_CHECKBOX}>
      <ButtonRound size={34} onClick={toggleTaskHandler}>
        <Icon.CancelCheckboxOutline />
      </ButtonRound>
    </Tippy>
  );
};

export default EditCardCancelTaskButton;
