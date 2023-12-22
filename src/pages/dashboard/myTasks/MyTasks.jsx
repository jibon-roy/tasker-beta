import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../utils/hooks/useAuth";
import useAxiosSecure from "../../../utils/hooks/useAxiosSecure";
// import Task from "./Task";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';


const Task = ({ idx, task }) => {
    return (
        <Draggable draggableId={task?._id} index={idx}>
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

const MyTasks = () => {
    const { user } = useAuth()
    const mail = user?.email
    const axiosSecure = useAxiosSecure()
    const { data, isLoading } = useQuery({
        queryKey: ['taskData'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/tasks/${mail}`)
            return res.data
        }
    })
    if (isLoading) {
        return <div className="w-full h-screen flex justify-center items-center"><span className="loading text-primary-green loading-ring loading-lg"></span></div>
    }

    const handleDragEnd = (result) => {

        if (!result.destination) {
            return;
        }

        const newData = Array.from(data);
        const [movedItem] = newData.splice(result.source.index, 1);
        newData.splice(result.destination.index, 0, movedItem);

        console.log(newData);
    };

    return (
        <>
            <div className="text-center font-semibold text-4xl mb-10">My Tasks</div>
            <DragDropContext onDragEnd={handleDragEnd}>
                <Droppable droppableId="droppable">
                    {(provided) => (<div ref={provided.innerRef}
                        {...provided.droppableProps} className="grid overflow-auto min-h-[70vh] md:grid-cols-2 lg:grid-cols-3">
                        <div>
                            <div className="border-r-2 border-primary-green text-center text-xl font-semibold  p-2 text-primary-green border-b-2 border-primary-green">To-do</div>
                            <div className="border-r-2 border-primary-green border-dashed">
                                {data?.map((task, idx) => <Task task={task} idx={idx} key={task?._id}></Task>)}
                                {provided.placeholder}
                            </div>
                        </div>
                        <div>
                            <div className="border-r-2 border-primary-green text-center text-xl font-semibold p-2 text-primary-green border-b-2 border-primary-green">Ongoing</div>
                        </div>
                        <div >
                            <div className="text-center text-xl font-semibold p-2  text-primary-green border-b-2 border-primary-green">Completed</div>
                        </div>
                    </div>)}
                </Droppable>
            </DragDropContext>
        </>
    );
};

export default MyTasks;