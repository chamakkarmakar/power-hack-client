import { useEffect, useState } from "react";
import BillingUpdate from "./BillingUpdate";
import Modal from './Modal';

const Billing = () => {
    const [search, setSearch] = useState('');
    const [addModal, setAddModal] = useState(false);
    const [updateModal, setUpdateModal] = useState(false);
    const [bills, setBills] = useState([]);
    useEffect(() => {
        fetch('https://fathomless-taiga-90401.herokuapp.com/api/billing-list')
            .then(res => res.json())
            .then(data => setBills(data))
    }, [setBills])
   

    const handleAdd = () => {
        setAddModal(true);
    }

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure to delete?');
        if (proceed) {
            const url = `https://fathomless-taiga-90401.herokuapp.com/api/delete-billing/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    const remaining = bills.filter(bill => bill._id !== id);
                    setBills(remaining);
                })
        }
    }

    const handleEdit = id=> {
        setUpdateModal(true);
        <BillingUpdate id={id}></BillingUpdate>
    }

    const handleSearch = (event) => {
        const keyword = event.target.value;
        if (keyword !== '') {
            const result = bills.filter(user => {
                return user.search.toLowerCase().startsWith(keyword.toLowerCase())
            });
            setBills(result)
        }
    };
    


    return (
        <div className="overflow-x-auto">
            <div className="min-w-screen mt-10 bg-gray-100 flex items-center justify-center font-sans overflow-hidden">
                <div className="w-11/12 mx-2">
                    <div className="bg-stone-100 shadow-md border-2">
                        <div className="sm:flex py-3 mx-2">
                            <div className="flex-auto">
                                <input
                                    type="text"
                                    placeholder="Search User"
                                    value={search}
                                    onChange={handleSearch}
                                    className="w-11/12 py-2 border-b-2 border-blue-600 outline-none bg-inherit" />
                            </div>
                            <div>
                                <label htmlFor="add-modal"
                                    onClick={() => handleAdd()}
                                    className="focus:ring-2 focus:ring-offset-2 text-white cursor-pointer focus:ring-indigo-600 mt-4 sm:mt-0 inline-flex px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded">
                                    Add New Bill
                                </label>
                            </div>
                            {
                                addModal ?
                                    <Modal setAddModal={setAddModal}></Modal>
                                    : null
                            }
                            {
                                updateModal ? 
                                    <BillingUpdate updateModal={updateModal} setUpdateModal={setUpdateModal}></BillingUpdate> : null
                            }
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
                                    bills.map(bill =>
                                        <tr key={bill._id} className="border-b border-gray-200 bg-gray-50 hover:bg-gray-100">
                                            <td className="py-3 px-6 text-center border-r">
                                                <div className="flex items-center">
                                                    <span className="font-medium">{bill._id}</span>
                                                </div>
                                            </td>
                                            <td className="py-3 px-6 text-center border-r">
                                                <div className="flex items-center">
                                                    <span className="font-medium">{bill.name}</span>
                                                </div>
                                            </td>
                                            <td className="py-3 px-6 text-center border-r">
                                                <div className="flex items-center justify-center">
                                                    <span className="font-medium">{bill.email}</span>
                                                </div>
                                            </td>
                                            <td className="py-3 px-6 text-center border-r">
                                                <div className="flex items-center justify-center">
                                                    <span className="font-medium">{bill.phone}</span>
                                                </div>
                                            </td>
                                            <td className="py-3 px-6 text-center border-r">
                                                <div className="flex items-center justify-center">
                                                    <span className="font-medium">${bill.amount}</span>
                                                </div>
                                            </td>
                                            <td className="p-3 px-5 flex justify-end border-r">

                                                <button type="button" onClick={() => handleEdit(bill._id)} className="mr-3 text-sm bg-violet-500 hover:bg-violet-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Edit</button>

                                                <button type="button" onClick={() => handleDelete(bill._id)} className="text-sm bg-rose-600 hover:bg-rose-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Delete</button>
                                            </td>
                                        </tr>)
                                }

                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
           
            
        </div >
    );
};

export default Billing;