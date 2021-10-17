import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { Droppable } from 'react-beautiful-dnd';
import { memosActions } from 'store/memosSlice';
import * as Icon from 'components/UI/Icon/index.js';
import EditCardText from 'components/EditCard/EditCardText';
import EditTaskItem from 'components/EditCard/EditTasks/EditTaskItem';
import { SEditTasks, SEditNewTask } from 'components/EditCard/EditTasks/style.js';

const EditTasks = () => {
  const dispatch = useDispatch();
  const { memo } = useSelector((state) => state.memos);
  const [newTask, setNewTask] = useState('');

  const updateTitleHandler = (handledTask) => {
    setNewTask(handledTask);
    if (handledTask.includes('<div><br></div>')) {
      dispatch(
        memosActions.addTask({
          preIndex: 0,
          task: { id: uuid(), name: newTask, isCompleted: false },
        }),
      );
      setNewTask('');
    }
  };

  return (
    <Droppable droppableId='tasks'>
      {(provided) => (
        <SEditTasks ref={provided.innerRef} {...provided.droppableProps}>
          <SEditNewTask>
            <Icon.Add />
            <EditCardText text={newTask} updateTextHandler={updateTitleHandler} />
          </SEditNewTask>
          {memo.tasks.map((task, index) => (
            <EditTaskItem key={index} task={task} index={index} />
          ))}
        </SEditTasks>
      )}
    </Droppable>
  );
};

export default EditTasks;
