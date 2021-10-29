import { memo } from 'react';
import { useUpdateMemo } from 'hooks/updateMemo-hook.js';
import { useUI } from 'contexts/UI-context';
import { v4 as uuid } from 'uuid';
import { PALETTE_COLORS } from 'constants/paletteColors.js';
import * as Icon from 'components/UI/Icon/index.js';
import EditCardText from 'components/EditCard/EditCardText';
import {
  SEditTaskItem,
  SEditTaskItemIcon,
  SEditTaskItemText,
} from 'components/EditCard/EditTasks/EditTaskItem/style.js';

const EditTaskItem = ({ task, index, id }) => {
  const { currentMemo, dispatchUpdateMemo } = useUpdateMemo(id);
  const { UIState } = useUI();
  const memoColor = PALETTE_COLORS[currentMemo.color][UIState.theme];

  const updateTaskHandler = (handledTask) => {
    let updatedTasks = [...currentMemo.tasks];
    let tasksBeforeEditingTask = [...currentMemo.tasks].slice(0, index);
    let tasksAfterEditingTask = [...currentMemo.tasks].slice(index + 1);
    // press enter start a new line
    if (handledTask.includes('<div><br></div>')) {
      dispatchUpdateMemo({
        tasks: [
          ...tasksBeforeEditingTask,
          { ...task, name: '' },
          { ...task, id: uuid(), name: handledTask.replace('<div><br></div>', '') },
          ...tasksAfterEditingTask,
        ],
      });
      // press enter in line
    } else if (handledTask.includes('<div>') && !handledTask.includes('<div><br></div>')) {
      const editTextArr = handledTask.split('<div>');
      dispatchUpdateMemo({
        tasks: [
          ...tasksBeforeEditingTask,
          { ...task, id: uuid(), name: editTextArr[0] },
          { ...task, name: editTextArr[1].replace('</div>', '') },
          ...tasksAfterEditingTask,
        ],
      });
    } else {
      // update task
      updatedTasks[index] = { ...task, name: handledTask.replace('<div><br></div>', '') };
      dispatchUpdateMemo({
        tasks: updatedTasks,
      });
    }
  };

  const toggleIsCompletedHandler = (e) => {
    e.stopPropagation();
    let updatedTasks = [...currentMemo.tasks];
    updatedTasks[index] = { ...task, isCompleted: !task.isCompleted };
    dispatchUpdateMemo({ tasks: updatedTasks });
  };

  const deleteTaskHandler = () => {
    const updatedTasks = currentMemo.tasks.filter((item) => item.id !== task.id);
    dispatchUpdateMemo({ tasks: updatedTasks });
  };

  return (
    <SEditTaskItem style={{ '--color': memoColor }}>
      <SEditTaskItemIcon style={{ '--margin': !!id ? 0 : '-10px' }}>
        {!id && <Icon.Drag name='drag' />}
        {!task.isCompleted && (
          <Icon.EmptyCheckbox name='checkbox' onClick={toggleIsCompletedHandler} />
        )}
        {task.isCompleted && (
          <Icon.CheckboxOutline name='checkbox' onClick={toggleIsCompletedHandler} />
        )}
      </SEditTaskItemIcon>
      <SEditTaskItemText
        style={{
          '--text-decoration': task.isCompleted && 'line-through',
          '--color': task.isCompleted && 'var(--color-task-completed)',
        }}
      >
        <EditCardText text={task.name} updateTextHandler={updateTaskHandler} />
      </SEditTaskItemText>
      {!id && (
        <SEditTaskItemIcon>
          <Icon.Clear name='delete' onClick={deleteTaskHandler} />
        </SEditTaskItemIcon>
      )}
    </SEditTaskItem>
  );
};

export default memo(EditTaskItem);
