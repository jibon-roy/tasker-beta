

const TaskList = ({ task, idx }) => {
    return (
        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {idx + 1}
            </th>
            <td className="px-6 py-4">
                {task?.title}
            </td>
            <td className="px-6 py-4">
                {task?.body.slice(0, 30)}...
            </td>
            <td className="px-6 py-4">
                {task?.priority}
            </td>
            <td className="px-6 py-4">
                {task?.deadline}
            </td>
            <td className="px-6 py-4">
                <a href="#" className="font-medium text-primary-green dark:text-primary-green hover:underline">Edit</a>
            </td>
        </tr>
    );
};

export default TaskList;