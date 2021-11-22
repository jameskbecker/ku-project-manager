import React from 'react';
import assignments from '../../../mock-data/assignment';
import { Task } from '../../../types';
import Panel from '../../global/Panel';

type TodoPanelProps = {
  todo: Task;
};

const TodoPanel = ({ todo }: TodoPanelProps) => {
  const [assignment] = assignments.filter((a) => a.id === todo.id);
  return (
    <Panel secondary heading={todo.name} key={todo.id}>
      <div>{assignment.name}</div>
    </Panel>
  );
};

export default TodoPanel;
