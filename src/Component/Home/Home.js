
const Home = () => {
    return (
        <div>
            <nav class="flex items-center justify-between flex-wrap bg-slate-50 p-6">
                <div class="flex items-center flex-shrink-0 text-slate-700 mr-6">
                    <span class="font-semibold text-xl tracking-tight">BILL REGISTRY</span>
                </div>
                <div class="lg:items-center">
                    <span class="inline-block text-sm px-4 py-2 leading-none border rounded text-slate-800 border-slate-800">Paid Total: $4120</span>
                </div>
            </nav>

            <div class="overflow-x-auto">
                <div class="min-w-screen mt-10 bg-gray-100 flex items-center justify-center font-sans overflow-hidden">
                    <div class="w-11/12 mx-2">
                        <div class="bg-stone-100 shadow-md border-2">
                            <div class="sm:flex py-3 mx-2">
                                <div class="flex-auto">
                                    <input type="text" name="name" placeholder="Search User" class="w-11/12 py-2 border-b-2 border-blue-600 outline-none bg-inherit" />
                                </div>
                                <div x-data="{ showModal : false }">
                                    <button class="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 mt-4 sm:mt-0 inline-flex px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded">
                                        <p class="text-sm font-medium leading-none text-white">Add New Bill</p>
                                    </button>
                                </div>

                            </div>
                            <table class="min-w-max w-full table-auto border-collapse">
                                <thead>
                                    <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                        <th class="py-3 px-6 text-left">BILLING ID</th>
                                        <th class="py-3 px-6 text-left">FULL NAME</th>
                                        <th class="py-3 px-6 text-center">EMAIL</th>
                                        <th class="py-3 px-6 text-center">PHONE</th>
                                        <th class="py-3 px-6 text-center">PAID AMOUNT</th>
                                        <th class="py-3 px-6 text-center">ACTION</th>
                                    </tr>
                                </thead>
                                <tbody class="text-gray-600 text-sm font-light">

                                    <tr class="border-b border-gray-200 bg-gray-50 hover:bg-gray-100">
                                        <td class="py-3 px-6 text-center border-r">
                                            <div class="flex items-center">
                                                <span class="font-medium">PQR1120</span>
                                            </div>
                                        </td>
                                        <td class="py-3 px-6 text-center border-r">
                                            <div class="flex items-center">
                                                <span class="font-medium">Joe Biden</span>
                                            </div>
                                        </td>
                                        <td class="py-3 px-6 text-center border-r">
                                            <div class="flex items-center justify-center">
                                                <span class="font-medium">Jbidden@maga.us</span>
                                            </div>
                                        </td>
                                        <td class="py-3 px-6 text-center border-r">
                                            <div class="flex items-center justify-center">
                                                <span class="font-medium">+1410778980</span>
                                            </div>
                                        </td>
                                        <td class="py-3 px-6 text-center border-r">
                                            <div class="flex items-center justify-center">
                                                <span class="font-medium">$412</span>
                                            </div>
                                        </td>
                                        <td class="p-3 px-5 flex justify-end border-r">
                                            <button type="button" class="mr-3 text-sm bg-violet-500 hover:bg-violet-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Edit</button>
                                            <button type="button" class="text-sm bg-rose-600 hover:bg-rose-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Delete</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default Home;