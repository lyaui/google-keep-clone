import { useRef, memo, useMemo } from 'react';
import { useUpdateMemo } from '@/hooks/useUpdateMemo';

import { Droppable, Draggable } from 'react-beautiful-dnd';
import EditTaskItem from '@/components/EditCard/EditTasks/EditTaskItem';
import {
  SEditTasks,
  STaskItem,
} from '@/components/EditCard/EditTasks/style.jsx';

const TaskList = () => {
  const taskRef = useRef();
  const { currentMemo } = useUpdateMemo();

  const tasks = useMemo(() => currentMemo.tasks, [currentMemo]);

  return (
    <Droppable droppableId="tasks">
      {(provided) => (
        <SEditTasks
          ref={provided.innerRef || taskRef}
          {...provided.droppableProps}
        >
          {/* edit task item */}
          {tasks.map((task, index) => (
            <Draggable key={task.id} draggableId={task.id} index={index}>
              {(provided, snapshot) => (
                <STaskItem
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  isDragging={snapshot.isDragging}
                  style={{
                    ...provided.draggableProps.style,
                    left: 'auto !important',
                    top: 'auto !important',
                  }}
                >
                  <EditTaskItem
                    key={index}
                    task={task}
                    index={index}
                    isEditable={true}
                  />
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

export default memo(TaskList);
