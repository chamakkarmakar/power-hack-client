
const BillingUpdate = ({id,updateModal,setUpdateModal}) => {
console.log(id);
    const handleUpdate = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const phone = event.target.phone.value;
        const amount = event.target.amount.value;
        const update = { name, email, phone, amount };
        if (updateModal) {
            const url = `http://localhost:5000/api/update-billing/${id}`;
            fetch(url, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(update)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                })
        }
        setUpdateModal(false);
    }

    return (
        <>
        <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-3/4 my-6 mx-auto max-w-3xl">
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                            <h3 className="text-3xl font-semibold">Update BILL: { id}</h3>
                        <button
                            className="bg-transparent border-0 text-black float-right"
                            onClick={() => setUpdateModal(false)}
                        >
                            <span className="text-black opacity-7 h-6 w-6 text-xl block bg-gray-400 py-0 font-semibold rounded-full">
                                X
                            </span>
                        </button>
                    </div>
                    <div className="relative p-6 flex-auto">

                        <form onSubmit={handleUpdate} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>

                            <div className="w-full bg-gray-50 px-4 ring-2 ring-gray-200 focus-within:ring-blue-400">
                                <input type="text" placeholder="Full Name" name="name" className="my-3 w-full border-none bg-transparent outline-none focus:outline-none" />
                            </div>
                            <div className="w-full bg-gray-50 px-4 ring-2 ring-gray-200 focus-within:ring-blue-400">
                                <input type="email" placeholder="Email" name="email" className="my-3 w-full border-none bg-transparent outline-none focus:outline-none" />
                            </div>
                            <div className="w-full bg-gray-50 px-4 ring-2 ring-gray-200 focus-within:ring-blue-400">
                                <input type="text" placeholder="Phone" name="phone" className="my-3 w-full border-none bg-transparent outline-none focus:outline-none" />
                            </div>
                            <div className="w-full bg-gray-50 px-4 ring-2 ring-gray-200 focus-within:ring-blue-400">
                                <input type="text" placeholder="Paid Amount" name="amount" className="my-3 w-full border-none bg-transparent outline-none focus:outline-none" />
                            </div>
                            <button className="w-full border-b-4 border-b-blue-600 bg-blue-500 py-3 font-bold text-white hover:bg-blue-400">
                               Update BILL
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    </>
    );
};

export default BillingUpdate;