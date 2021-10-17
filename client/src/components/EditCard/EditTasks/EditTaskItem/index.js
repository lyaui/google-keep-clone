import { memo } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { memosActions } from 'store/memosSlice';
import * as Icon from 'components/UI/Icon/index.js';
import EditCardText from 'components/EditCard/EditCardText';
import {
  SEditTaskItem,
  SEditTaskItemIcon,
  SEditTaskItemText,
} from 'components/EditCard/EditTasks/EditTaskItem/style.js';

const EditTaskItem = ({ task, index }) => {
  const dispatch = useDispatch();

  const updateTaskHandler = (handledTask) => {
    // new line new task
    if (handledTask.includes('<div><br></div>')) {
      dispatch(
        memosActions.addTask({
          preIndex: index,
          task: { id: uuid(), name: '', isCompleted: false },
        }),
      );
    }
    // update task
    dispatch(
      memosActions.updateTask({ ...task, name: handledTask.replace('<div><br></div>', '') }),
    );
  };

  const toggleIsCompletedHandler = () =>
    dispatch(memosActions.updateTask({ ...task, isCompleted: !task.isCompleted }));

  const deleteTaskHandler = () => {
    dispatch(memosActions.removeTask(task.id));
  };
  return (
    <SEditTaskItem>
      <SEditTaskItemIcon>
        <Icon.Drag name='drag' />
        {!task.isCompleted && (
          <Icon.EmptyCheckbox name='checkbox' onClick={toggleIsCompletedHandler} />
        )}
        {task.isCompleted && (
          <Icon.CheckboxOutline name='checkbox' onClick={toggleIsCompletedHandler} />
        )}
      </SEditTaskItemIcon>
      <SEditTaskItemText isCompleted={task.isCompleted}>
        <EditCardText text={task.name} updateTextHandler={updateTaskHandler} />
      </SEditTaskItemText>
      <SEditTaskItemIcon>
        <Icon.Clear name='delete' onClick={deleteTaskHandler} />
      </SEditTaskItemIcon>
    </SEditTaskItem>
  );
};

export default memo(EditTaskItem);
