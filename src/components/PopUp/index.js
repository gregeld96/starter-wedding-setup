import BankLogo from '../../assets/Bank.png';

function PopUpGift({open, onClick}) {
    return (
        <div
            className={`fixed ${open ? "" : "hidden"} z-40 inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full`}
        >
             <div
                className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white"
            >
                <div className="mt-3 text-center">
                    <h3 className="text-2xl leading-6 font-['Dancing_Script'] font-medium text-gray-900">Wedding Gift</h3>
                    <div className="mt-2 px-7 py-3">
                        <p className="text-sm text-gray-500">
                        Please send your gift via the following information below:
                        </p>
                    </div>
                    <div className="mt-4 text-black">
                        <img className="h-[30px] w-[100px] mx-auto" src={BankLogo} alt='' />
                        <p className='mt-4 mb-2 text-xl font-bold leading-3'>5660344341</p>
                        <p className='text-sm text-gray-500'>A/N Veronika Dwi Kristanti</p>
                    </div>
                    <div className="items-center mt-3 px-4 py-3" onClick={onClick}>
                        <div
                            id="ok-btn"
                            className="px-4 py-2 bg-green-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300"
                        >
                            <p>Close</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
    )
}

export default PopUpGift;