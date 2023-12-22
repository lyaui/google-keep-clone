import { memo } from 'react';
import type { MouseEvent } from 'react';
import { isNil } from 'lodash';

import { MemoTask } from '@/types';
import { useUpdateMemo } from '@/hooks/useUpdateMemo';
import { useUI } from '@/contexts/UI-context';
import { v4 as uuid } from 'uuid';
import { PALETTE_COLORS } from '@/constants/paletteColors';
import * as Icon from '@/components/UI/Icon';
import EditMemoText from '@/components/EditCard/EditMemoText';
import {
  SEditTaskItem,
  SEditTaskItemIcon,
  SEditTaskItemText,
} from '@/components/EditCard/EditTasks/EditTaskItem/style.jsx';

interface EditTaskItemProps {
  task: MemoTask;
  index: number;
  id?: string;
}

const EditTaskItem = ({ task, index, id }: EditTaskItemProps) => {
  const { currentMemo, dispatchUpdateMemo } = useUpdateMemo(id);
  const { UIState } = useUI();
  const memoColor = PALETTE_COLORS[currentMemo.color][UIState.theme];

  const isNewMemo = isNil(id);

  const updateTaskHandler = (handledTask: string) => {
    let updatedTasks = [...currentMemo.tasks];
    let tasksBeforeEditingTask = [...currentMemo.tasks].slice(0, index);
    let tasksAfterEditingTask = [...currentMemo.tasks].slice(index + 1);
    // press enter start a new line
    if (handledTask.includes('<div><br></div>')) {
      dispatchUpdateMemo({
        tasks: [
          ...tasksBeforeEditingTask,
          { ...task, name: '' },
          {
            ...task,
            id: uuid(),
            name: handledTask.replace('<div><br></div>', ''),
          },
          ...tasksAfterEditingTask,
        ],
      });
      // press enter in line
    } else if (
      handledTask.includes('<div>') &&
      !handledTask.includes('<div><br></div>')
    ) {
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
      updatedTasks[index] = {
        ...task,
        name: handledTask.replace('<div><br></div>', ''),
      };
      dispatchUpdateMemo({
        tasks: updatedTasks,
      });
    }
  };

  const toggleIsCompletedHandler = (event: MouseEvent<SVGAElement>) => {
    event.stopPropagation();
    let updatedTasks = [...currentMemo.tasks];
    updatedTasks[index] = { ...task, isCompleted: !task.isCompleted };
    dispatchUpdateMemo({ tasks: updatedTasks });
  };

  const deleteTaskHandler = () => {
    const updatedTasks = currentMemo.tasks.filter(
      (item) => item.id !== task.id
    );
    dispatchUpdateMemo({ tasks: updatedTasks });
  };

  return (
    <SEditTaskItem color={memoColor}>
      <SEditTaskItemIcon isNewMemo={isNewMemo}>
        <Icon.Drag name="drag" />
        {task.isCompleted ? (
          <Icon.CheckboxOutline
            name="checkbox"
            onClick={toggleIsCompletedHandler}
          />
        ) : (
          <Icon.EmptyCheckbox
            name="checkbox"
            onClick={toggleIsCompletedHandler}
          />
        )}
      </SEditTaskItemIcon>
      <SEditTaskItemText isComplete={task.isCompleted}>
        <EditMemoText text={task.name} updateTextHandler={updateTaskHandler} />
      </SEditTaskItemText>
      {!isNewMemo && (
        <SEditTaskItemIcon>
          <Icon.Clear name="delete" onClick={deleteTaskHandler} />
        </SEditTaskItemIcon>
      )}
    </SEditTaskItem>
  );
};

export default memo(EditTaskItem);
