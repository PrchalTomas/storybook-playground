import React from 'react';
import Task from './Task';
import { TaskObject } from './Task';

interface TaskListProps {
    loading?: boolean;
    tasks: Array<TaskObject>;
    onPinTask: (id: string) => any;
    onArchiveTask: (id: string) => any;
}

const TaskList: React.SFC<TaskListProps> = ({
    loading,
    tasks,
    onPinTask,
    onArchiveTask
}) => {
    const events = {
        onPinTask,
        onArchiveTask
    };

    const LoadingRow = (
        <div className="loading-item">
            <span className="glow-checkbox" />
            <span className="glow-text">
                <span>Loading</span> <span>cool</span> <span>state</span>
            </span>
        </div>
    );

    if (loading) {
        return (
            <div className="list-items">
                {LoadingRow}
                {LoadingRow}
                {LoadingRow}
                {LoadingRow}
                {LoadingRow}
                {LoadingRow}
            </div>
        );
    }

    if (tasks.length === 0) {
        return (
            <div className="list-items">
                <div className="wrapper-message">
                    <span className="icon-check" />
                    <div className="title-message">You have no tasks</div>
                    <div className="subtitle-message">Sit back and relax</div>
                </div>
            </div>
        );
    }

    const sortedTasks = [
        ...tasks.filter((task: TaskObject) => task.state === 'TASK_PINNED'),
        ...tasks.filter((task: TaskObject) => task.state !== 'TASK_PINNED')
    ];

    return (
        <div className="list-items">
            {sortedTasks.map(task => (
                <Task key={task.id} task={task} {...events} />
            ))}
        </div>
    );
};

TaskList.defaultProps = {
    loading: false
};

export default TaskList;
