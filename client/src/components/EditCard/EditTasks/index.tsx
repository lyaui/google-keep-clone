import { useState } from 'react';
import { useUpdateMemo } from '@/hooks/useUpdateMemo';
import { v4 as uuid } from 'uuid';
import * as Icon from '@/components/UI/Icon';
import EditMemoText from '@/components/EditCard/EditMemoText';
import { SEditNewTask } from '@/components/EditCard/EditTasks/style.jsx';
import TaskList from '@/components/EditCard/EditTasks/TaskList';

const EditTasks = () => {
  const { currentMemo, dispatchUpdateMemo } = useUpdateMemo();
  const [newTask, setNewTask] = useState('');

  const updateTaskHandler = (handledTask: string) => {
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
    <>
      {/* add new task */}
      <SEditNewTask>
        <Icon.Add />
        <EditMemoText text={newTask} updateTextHandler={updateTaskHandler} />
      </SEditNewTask>
      {/* edit task item */}
      <TaskList />
    </>
  );
};

export default EditTasks;
