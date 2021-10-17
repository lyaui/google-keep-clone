import { useSelector } from 'react-redux';
import * as Icon from 'components/UI/Icon/index.js';
import EditTaskItem from 'components/EditCard/EditTasks/EditTaskItem';

const EditTasks = () => {
  const { memo } = useSelector((state) => state.memos);

  return (
    <div>
      <Icon.Add />
      清單項目
      {memo.tasks.map((task, index) => (
        <EditTaskItem key={index} task={task} index={index} />
      ))}
    </div>
  );
};

export default EditTasks;
