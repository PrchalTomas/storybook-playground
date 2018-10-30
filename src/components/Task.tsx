import React from 'react';

interface TaskInterface {
    task: {
        id: string;
        title: string;
        state: string;
    };
    onArchiveTask: () => any;
    onPinTask: () => any;
}

const Task = ({
    task: { id, title, state },
    onArchiveTask,
    onPinTask
}: TaskInterface) => (
    <div className="list-item">
        <input type="text" value={title} readOnly={true} />
    </div>
);

export default Task;
