import { useEffect, useState } from "react";
import BillingInfo from "./BillingInfo";
import Modal from "./Modal";

const Billing = () => {
    const [bills, setBills] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/api/billing-list')
            .then(res => res.json())
            .then(data => setBills(data))
    }, [setBills])
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
                                {
                                    bills.map((bill, index) =>
                                        <BillingInfo
                                            key={index}
                                            bill={bill}
                                            index={index}
                                        ></BillingInfo>)
                                }

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