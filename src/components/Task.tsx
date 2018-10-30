import React from 'react';

export interface TaskObject {
    id: string;
    title: string;
    state: string;
}

interface TaskProps {
    key?: string;
    task: TaskObject;
    onArchiveTask: (id: string) => any;
    onPinTask: (id: string) => any;
}

const Task: React.SFC<TaskProps> = ({
    task: { id, title, state },
    onArchiveTask,
    onPinTask
}) => (
    <div className={`list-item ${state}`}>
        <label className="checkbox">
            <input
                type="checkbox"
                defaultChecked={state === 'TASK_ARCHIVED'}
                disabled={true}
                name="checked"
            />
            <span
                className="checkbox-custom"
                onClick={() => onArchiveTask(id)}
            />
        </label>

        <div className="title">
            <input
                type="text"
                value={title}
                readOnly={true}
                placeholder="Input title"
            />
        </div>

        <div className="actions" onClick={event => event.stopPropagation()}>
            {state !== 'TASK_ARCHIVED' && (
                <a onClick={() => onPinTask(id)}>
                    <span className={'icon-star'} />
                </a>
            )}
        </div>
    </div>
);

export default Task;
