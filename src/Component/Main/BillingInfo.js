
const BillingInfo = ({bill}) => {
    return (
        <tr className="border-b border-gray-200 bg-gray-50 hover:bg-gray-100">
            <td className="py-3 px-6 text-center border-r">
                <div className="flex items-center">
                    <span className="font-medium">PQR1120</span>
                </div>
            </td>
            <td className="py-3 px-6 text-center border-r">
                <div className="flex items-center">
                    <span className="font-medium">{bill.name }</span>
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
                <button type="button" className="mr-3 text-sm bg-violet-500 hover:bg-violet-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Edit</button>
                <button type="button" className="text-sm bg-rose-600 hover:bg-rose-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Delete</button>
            </td>
        </tr>
    );
};

export default BillingInfo;