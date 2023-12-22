import Swal from "sweetalert2";
import useAuth from "../../utils/hooks/useAuth";
import { updateProfile } from "firebase/auth";
import { useState } from "react";
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { Link } from "react-router-dom";

const Dashboard = () => {
    const { user } = useAuth()
    let [isOpen, setIsOpen] = useState(false);
    let [isOpen2, setIsOpen2] = useState(false);



    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }
    function closeModal2() {
        setIsOpen2(false)
    }

    function openModal2() {
        setIsOpen2(true)
    }


    const handleChangeName = (e) => {
        e.preventDefault()
        const name = e.currentTarget.name.value;
        updateProfile(user, { displayName: name })
            .then(() => Swal.fire({
                title: "Successful",
                text: `Name has changed`,
                icon: "success"
            }).then(() => location.reload()))
            .catch(() => Swal.fire({
                title: "Opps!",
                text: `Name not changed`,
                icon: "error"
            }))
    }

    const handleChangePhoto = (e) => {
        e.preventDefault()
        const photo = e.currentTarget.photo.value;
        updateProfile(user, { photoURL: photo })
            .then(() => Swal.fire({
                title: "Successful",
                text: `Photo has changed`,
                icon: "success"
            }).then(() => location.reload()))
            .catch(() => Swal.fire({
                title: "Opps!",
                text: `Photo not changed`,
                icon: "error"
            }))
    }

    return (
        <div>
            <div className="text-4xl">Welcome to Dashboard.</div>
            <div className="flex flex-col items-center pb-10">
                <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={user?.photoURL} alt="Bonnie image" />
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{user?.displayName}</h5>

                <div className="flex mt-4 md:mt-6">
                    <button
                        className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-primary-green rounded-lg hover:bg-secondary-green focus:ring-4 focus:outline-none focus:ring-secondary-green "
                        type="button"
                        onClick={openModal}
                    >
                        Change Name
                    </button>
                    <Transition appear show={isOpen} as={Fragment}>
                        <Dialog as="div" className="z-10" onClose={closeModal}>
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <div className="fixed inset-0 bg-black/25" />
                            </Transition.Child>

                            <div className="fixed inset-0 overflow-y-auto">
                                <div className="flex min-h-full items-center justify-center p-4 text-center">
                                    <Transition.Child
                                        as={Fragment}
                                        enter="ease-out duration-300"
                                        enterFrom="opacity-0 scale-95"
                                        enterTo="opacity-100 scale-100"
                                        leave="ease-in duration-200"
                                        leaveFrom="opacity-100 scale-100"
                                        leaveTo="opacity-0 scale-95"
                                    >
                                        <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                            <form onSubmit={handleChangeName}>
                                                <div className="mx-auto text-2xl font-semibold text-center">Admin Action</div>
                                                <div className="w-full h-px bg-primary-text mt-4 mb-4"></div>

                                                <div className="text-primary-text mt-4 mb-2 mr-2">Change name:</div>
                                                <div className="mt-2">Your name<span className="text-red-600">*</span></div>
                                                <div className="px-4 border-2 border-primary-main py-2 bg-white rounded-lg dark:bg-gray-800">
                                                    <label htmlFor="comment" className="sr-only">Your feedback</label>
                                                    <input defaultValue={user?.displayName} id="name" name='name' className="w-full outline-none px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder='Write your name...' required></input>
                                                </div>
                                                <div className="flex gap-3">
                                                    <button
                                                        type="submit"
                                                        className="text-white w-1/2 bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded-lg mt-4 text-lg"
                                                    >
                                                        Done
                                                    </button>
                                                    <button
                                                        onClick={closeModal}
                                                        type="reset"
                                                        className="text-primary-text w-1/2 bg-primary-bg2 border-2 border-primary-main py-2 px-8 focus:outline-none hover:bg-blue-200 rounded-lg mt-4 text-lg"
                                                    >
                                                        Cancel
                                                    </button>
                                                </div>
                                            </form>
                                        </Dialog.Panel>
                                    </Transition.Child>
                                </div>
                            </div>
                        </Dialog>
                    </Transition>

                    <button
                        className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700 ms-3"
                        type="button"
                        onClick={openModal2}
                    >
                        Update Photo
                    </button>
                    <Transition appear show={isOpen2} as={Fragment}>
                        <Dialog as="div" className="z-10" onClose={closeModal2}>
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <div className="fixed inset-0 bg-black/25" />
                            </Transition.Child>

                            <div className="fixed inset-0 overflow-y-auto">
                                <div className="flex min-h-full items-center justify-center p-4 text-center">
                                    <Transition.Child
                                        as={Fragment}
                                        enter="ease-out duration-300"
                                        enterFrom="opacity-0 scale-95"
                                        enterTo="opacity-100 scale-100"
                                        leave="ease-in duration-200"
                                        leaveFrom="opacity-100 scale-100"
                                        leaveTo="opacity-0 scale-95"
                                    >
                                        <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                            <form onSubmit={handleChangePhoto}>
                                                <div className="mx-auto text-2xl font-semibold text-center">Admin Action</div>
                                                <div className="w-full h-px bg-primary-text mt-4 mb-4"></div>

                                                <div className="text-primary-text mt-4 mb-2 mr-2">Change photo URL</div>
                                                <div className="mt-2">Your Photo URL<span className="text-red-600">*</span></div>
                                                <div className="px-4 border-2 border-primary-main py-2 bg-white rounded-lg dark:bg-gray-800">
                                                    {/* <label htmlFor="photo" className="sr-only">Your feedback</label> */}
                                                    <input defaultValue={user?.photoURL} id="photo" name='photo' className="w-full outline-none px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder='Write your name...' required></input>
                                                </div>
                                                <div className="flex gap-3">
                                                    <button
                                                        type="submit"
                                                        className="text-white w-1/2 bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded-lg mt-4 text-lg"
                                                    >
                                                        Done
                                                    </button>
                                                    <button
                                                        onClick={closeModal2}
                                                        type="reset"
                                                        className="text-primary-text w-1/2 bg-primary-bg2 border-2 border-primary-main py-2 px-8 focus:outline-none hover:bg-blue-200 rounded-lg mt-4 text-lg"
                                                    >
                                                        Cancel
                                                    </button>
                                                </div>
                                            </form>
                                        </Dialog.Panel>
                                    </Transition.Child>
                                </div>
                            </div>
                        </Dialog>
                    </Transition>
                </div>
            </div>
            <Link to="/dashboard/add" className="btn bg-primary-green hover:bg-primary-green text-white">Add Quick Task</Link>
            <Link to="/dashboard/my-tasks" className="btn bg-primary-green hover:bg-primary-green text-white">My Tasks</Link>
            <div>

                <div className="text-4xl my-10">Recently added Tasks</div>
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    SL
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Task Title
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Priority
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Deadline
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Apple MacBook Pro 17
                                </th>
                                <td className="px-6 py-4">
                                    Silver
                                </td>
                                <td className="px-6 py-4">
                                    Laptop
                                </td>
                                <td className="px-6 py-4">
                                    $2999
                                </td>
                                <td className="px-6 py-4">
                                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                </td>
                            </tr>
                            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Microsoft Surface Pro
                                </th>
                                <td className="px-6 py-4">
                                    White
                                </td>
                                <td className="px-6 py-4">
                                    Laptop PC
                                </td>
                                <td className="px-6 py-4">
                                    $1999
                                </td>
                                <td className="px-6 py-4">
                                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                </td>
                            </tr>
                            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Magic Mouse 2
                                </th>
                                <td className="px-6 py-4">
                                    Black
                                </td>
                                <td className="px-6 py-4">
                                    Accessories
                                </td>
                                <td className="px-6 py-4">
                                    $99
                                </td>
                                <td className="px-6 py-4">
                                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                </td>
                            </tr>
                            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Google Pixel Phone
                                </th>
                                <td className="px-6 py-4">
                                    Gray
                                </td>
                                <td className="px-6 py-4">
                                    Phone
                                </td>
                                <td className="px-6 py-4">
                                    $799
                                </td>
                                <td className="px-6 py-4">
                                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Apple Watch 5
                                </th>
                                <td className="px-6 py-4">
                                    Red
                                </td>
                                <td className="px-6 py-4">
                                    Wearables
                                </td>
                                <td className="px-6 py-4">
                                    $999
                                </td>
                                <td className="px-6 py-4">
                                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
};

export default Dashboard;