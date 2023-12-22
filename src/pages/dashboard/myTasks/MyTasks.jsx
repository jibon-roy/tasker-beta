import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../utils/hooks/useAuth";
import useAxiosSecure from "../../../utils/hooks/useAxiosSecure";
import Task from "./Task";


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
    return (
        <>
            <div className="text-center font-semibold text-4xl mb-10">My Tasks</div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3">
                <div>
                    <div className="border-r-2 border-primary-green text-center text-xl font-semibold  p-2 text-primary-green border-b-2 border-primary-green">To-do</div>
                    <div>
                        {data?.map((task, idx) => <Task task={task} idx={idx} key={task?._id}></Task>)}
                    </div>
                </div>
                <div>
                    <div className="border-r-2 border-primary-green text-center text-xl font-semibold p-2 text-primary-green border-b-2 border-primary-green">Ongoing</div>
                </div>
                <div >
                    <div className="text-center text-xl font-semibold p-2  text-primary-green border-b-2 border-primary-green">Completed</div>
                </div>
            </div>
        </>
    );
};

export default MyTasks;