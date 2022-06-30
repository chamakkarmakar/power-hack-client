
const Modal = ({setShowModal}) => {
    const handleSubmit = event => {
        event.preventDefault();
        const name=event.target.name.value;
        const email=event.target.email.value;
        const phone=event.target.phone.value;
        const amount = event.target.amount.value;
        const add = { name, email, phone, amount };
        // console.log(add);

        const url=`http://localhost:5000/api/add-billing`;
        fetch(url,{
            method: 'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(add)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
        })

        event.target.reset();
    }
    return (
        <div className="w-1/2 container mx-auto">
            <input type="checkbox" id="add-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label onClick={()=>setShowModal(false)}
                        htmlFor="add-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-secondary"> Add Bill </h3>
                    <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>

                        <div  className="w-full bg-gray-50 px-4 ring-2 ring-gray-200 focus-within:ring-blue-400">
                            <input type="text" placeholder="Full Name" name="name" className="my-3 w-full border-none bg-transparent outline-none focus:outline-none" />
                        </div>
                        <div  className="w-full bg-gray-50 px-4 ring-2 ring-gray-200 focus-within:ring-blue-400">
                            <input type="email" placeholder="Email" name="email" className="my-3 w-full border-none bg-transparent outline-none focus:outline-none" />
                        </div>
                        <div  className="w-full bg-gray-50 px-4 ring-2 ring-gray-200 focus-within:ring-blue-400">
                            <input type="text" placeholder="Phone" name="phone" className="my-3 w-full border-none bg-transparent outline-none focus:outline-none" />
                        </div>
                        <div  className="w-full bg-gray-50 px-4 ring-2 ring-gray-200 focus-within:ring-blue-400">
                            <input type="text" placeholder="Paid Amount" name="amount" className="my-3 w-full border-none bg-transparent outline-none focus:outline-none" />
                        </div>
                        <button  className="w-full border-b-4 border-b-blue-600 bg-blue-500 py-3 font-bold text-white hover:bg-blue-400">
                            ADD BILL
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Modal;