import { Draggable } from 'react-beautiful-dnd';

const Task = ({ idx, task }) => {
    return (
        <Draggable draggableId={task.name} index={idx}>
            {(provided) => (<div
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                className="card select-none bg-white shadow-xl m-2 cursor-pointer">
                <div className="p-5">
                    <h2 className="card-title">{idx + 1}. {task?.title}</h2>
                    <p className="my-2">Description: {task?.body}</p>
                    <div className="flex justify-between">
                        <div>
                            <div className="text-red-500">Deadline: {task?.deadline}</div>
                            <div className="">Priority: {task?.priority}</div>
                        </div>
                        <button className="btn font-semibold hover:bg-primary-green bg-primary-green text-white">Edit</button>
                    </div>
                </div>
            </div>
            )}
        </Draggable>
    );
};

export default Task;