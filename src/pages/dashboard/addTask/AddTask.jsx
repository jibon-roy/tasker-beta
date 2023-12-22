import { useState } from "react";
import useAxiosSecure from "../../../utils/hooks/useAxiosSecure";
import useAuth from "../../../utils/hooks/useAuth";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const AddTask = () => {
    const notify = () => toast("Notification: New task added");
    const axiosSecure = useAxiosSecure()
    const [priority, setPriority] = useState('Education');
    const { user } = useAuth();
    const email = user?.email;


    const handlePublishTask = (e) => {
        e.preventDefault()
        const form = e.currentTarget;
        const title = form.title.value;
        const description = form.description.value;
        const deadline = form.deadline.value;
        const TaskData = {
            user: email,
            priority: priority,
            title: title,
            body: description,
            deadline: deadline

        }
        console.log(TaskData)
        axiosSecure.post('/postTask', TaskData)
            .then(res => {
                if (res.data) {
                    notify()

                }
            })
        form.reset()

    }
    return (
        <div>
            <div className="text-center font-semibold text-4xl mb-10">Add new task</div>

            <form onSubmit={handlePublishTask} className="max-w-md mx-auto p-4 mb-10 bg-primary-bg2 rounded-lg">
                <div className="mb-5">
                    <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Task title:<span className="text-red-600">*</span></label>
                    <input autoComplete="on" type="text" name='title' id="title" maxLength={60} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-green focus:border-primary-green block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-green dark:focus:border-primary-green dark:shadow-sm-light" placeholder="60 letters only" required />
                </div>
                <label htmlFor="description" autoComplete="on" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Task Description:<span className="text-red-600">*</span></label>
                <textarea id="description" name='description' rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-green focus:border-primary-green dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-green dark:focus:border-primary-green" placeholder="Leave a Task..." required></textarea>
                <div className="mb-5">
                    <label htmlFor="priority" className="block mb-2 mt-4 text-sm font-medium text-gray-900 dark:text-white">Select Priority<span className="text-red-600">*</span></label>
                    <select id="priority" onChange={(e) => setPriority(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-green focus:border-primary-green block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-green dark:focus:border-primary-green" required >
                        <option value={'low'}>Low</option>
                        <option value={'moderate'}>Moderate</option>
                        <option value={'high'}>Hign</option>
                    </select>
                </div>
                <div className="mb-5">
                    <label htmlFor="deadline" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Task deadline:<span className="text-red-600">*</span></label>
                    <input type="date" name='deadline' id="deadline" maxLength={60} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-green focus:border-primary-green block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-green dark:focus:border-primary-green dark:shadow-sm-light" required />
                </div>

                <button type="submit" className="text-white bg-primary-green btn hover:bg-primary-green focus:ring-primary-green font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-green dark:hover:bg-primary-green dark:focus:ring-primary-green">Add Task</button>
            </form>
            <ToastContainer />
        </div>
    );
};

export default AddTask;