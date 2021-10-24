import { useState } from 'react';
import { useUpdateMemo } from 'hooks/updateMemo-hook.js';
import { v4 as uuid } from 'uuid';
import { Droppable } from 'react-beautiful-dnd';
import * as Icon from 'components/UI/Icon/index.js';
import EditCardText from 'components/EditCard/EditCardText';
import EditTaskItem from 'components/EditCard/EditTasks/EditTaskItem';
import { SEditTasks, SEditNewTask } from 'components/EditCard/EditTasks/style.js';

const EditTasks = () => {
  const { currentMemo, dispatchUpdateMemo } = useUpdateMemo();
  const { color } = currentMemo;
  const [newTask, setNewTask] = useState('');

  const updateTaskHandler = (handledTask) => {
    setNewTask(handledTask);
    if (handledTask.includes('<div><br></div>')) {
      const updatedTasks = [
        { id: uuid(), name: newTask, isCompleted: false },
        ...currentMemo.tasks,
      ];
      dispatchUpdateMemo({ tasks: updatedTasks });
      setNewTask('');
    }
  };

  return (
    <Droppable droppableId='tasks'>
      {(provided) => (
        <SEditTasks ref={provided.innerRef} {...provided.droppableProps}>
          {/* add new task */}
          <SEditNewTask>
            <Icon.Add />
            <EditCardText text={newTask} updateTextHandler={updateTaskHandler} />
          </SEditNewTask>

          {/* edit task item */}
          {currentMemo.tasks.map((task, index) => (
            <EditTaskItem key={index} task={task} index={index} color={color} />
          ))}
          {provided.placeholder}
        </SEditTasks>
      )}
    </Droppable>
  );
};

export default EditTasks;
