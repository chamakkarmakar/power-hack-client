import { useState } from "react";
import Modal from "./Modal";

const Billing = () => {
    const [showModal, setShowModal] = useState(false);
    const handleAdd = () => {
        setShowModal(true);
    }
   
    return (
        <div className="overflow-x-auto">
            <div className="min-w-screen mt-10 bg-gray-100 flex items-center justify-center font-sans overflow-hidden">
                <div className="w-11/12 mx-2">
                    <div className="bg-stone-100 shadow-md border-2">
                        <div className="sm:flex py-3 mx-2">
                            <div className="flex-auto">
                                <input type="text" name="name" placeholder="Search User" className="w-11/12 py-2 border-b-2 border-blue-600 outline-none bg-inherit" />
                            </div>
                            <div>
                                <label htmlFor="add-modal"
                                    onClick={() => handleAdd()}
                                    className="focus:ring-2 focus:ring-offset-2 text-white focus:ring-indigo-600 mt-4 sm:mt-0 inline-flex px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded">
                                    Add New Bill
                                </label>
                            </div>

                        </div>
                        <table className="min-w-max w-full table-auto border-collapse">
                            <thead>
                                <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                    <th className="py-3 px-6 text-left">BILLING ID</th>
                                    <th className="py-3 px-6 text-left">FULL NAME</th>
                                    <th className="py-3 px-6 text-center">EMAIL</th>
                                    <th className="py-3 px-6 text-center">PHONE</th>
                                    <th className="py-3 px-6 text-center">PAID AMOUNT</th>
                                    <th className="py-3 px-6 text-center">ACTION</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-600 text-sm font-light">

                                <tr className="border-b border-gray-200 bg-gray-50 hover:bg-gray-100">
                                    <td className="py-3 px-6 text-center border-r">
                                        <div className="flex items-center">
                                            <span className="font-medium">PQR1120</span>
                                        </div>
                                    </td>
                                    <td className="py-3 px-6 text-center border-r">
                                        <div className="flex items-center">
                                            <span className="font-medium">Joe Biden</span>
                                        </div>
                                    </td>
                                    <td className="py-3 px-6 text-center border-r">
                                        <div className="flex items-center justify-center">
                                            <span className="font-medium">Jbidden@maga.us</span>
                                        </div>
                                    </td>
                                    <td className="py-3 px-6 text-center border-r">
                                        <div className="flex items-center justify-center">
                                            <span className="font-medium">+1410778980</span>
                                        </div>
                                    </td>
                                    <td className="py-3 px-6 text-center border-r">
                                        <div className="flex items-center justify-center">
                                            <span className="font-medium">$412</span>
                                        </div>
                                    </td>
                                    <td className="p-3 px-5 flex justify-end border-r">
                                        <button type="button" className="mr-3 text-sm bg-violet-500 hover:bg-violet-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Edit</button>
                                        <button type="button" className="text-sm bg-rose-600 hover:bg-rose-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Delete</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
            {
                showModal ?
                    <Modal
                        showModal={showModal}
                        setShowModal={setShowModal}></Modal>
                        : null
                }
            </div >
    );
};

export default Billing;