import { useState, useRef } from 'react';
import { useUpdateMemo } from 'hooks/updateMemo-hook.js';
import { v4 as uuid } from 'uuid';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import * as Icon from 'components/UI/Icon/index.js';
import EditCardText from 'components/EditCard/EditCardText';
import EditTaskItem from 'components/EditCard/EditTasks/EditTaskItem';
import { SEditTasks, SEditNewTask, STaskItem } from 'components/EditCard/EditTasks/style.js';

const EditTasks = () => {
  const taskRef = useRef();
  const { currentMemo, dispatchUpdateMemo } = useUpdateMemo();
  const [newTask, setNewTask] = useState('');

  const updateTaskHandler = (handledTask) => {
    setNewTask(handledTask);

    // if just press enter
    if (handledTask === '<div><br></div><div><br></div>') {
      setNewTask('');
      return;
    }
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
        <SEditTasks ref={provided.innerRef || taskRef} {...provided.droppableProps}>
          {/* add new task */}
          <SEditNewTask>
            <Icon.Add />
            <EditCardText text={newTask} updateTextHandler={updateTaskHandler} />
          </SEditNewTask>

          {/* edit task item */}
          {currentMemo.tasks.map((task, index) => (
            <Draggable key={task.id} draggableId={task.id} index={index}>
              {(provided, snapshot) => (
                <STaskItem
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  isDragging={snapshot.isDragging}
                >
                  <EditTaskItem key={index} task={task} index={index} />
                </STaskItem>
              )}
            </Draggable>
          ))}
          {provided.placeholder}
        </SEditTasks>
      )}
    </Droppable>
  );
};

export default EditTasks;
