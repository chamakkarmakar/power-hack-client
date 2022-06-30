import Billing from "../Main/Billing";

const Home = () => {
  
    return (
        <div>
            <nav className="flex items-center justify-between flex-wrap bg-slate-50 p-6">
                <div className="flex items-center flex-shrink-0 text-slate-700 mr-6">
                    <span className="font-semibold text-xl tracking-tight">BILL REGISTRY</span>
                </div>
                <div className="lg:items-center">
                    <span className="inline-block text-sm px-4 py-2 leading-none border rounded text-slate-800 border-slate-800">Paid Total: $</span>
                </div>
            </nav>
            <Billing></Billing>
        </div >
    );
};

export default Home;