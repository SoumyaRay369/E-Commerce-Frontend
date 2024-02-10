export const PayoutCard = ({ title, amount, orderCount, paymentDate }) => {
    return <div className="px-4">
        <div className="rounded-lg shadow-md text-white bg-sky-700 hover:bg-sky-800 h-32 flex flex-col ">
            <div className="flex-grow flex flex-col pt-5 px-6">
                <div className="flex space-x-2">
                    <div>{title}</div>
                    <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                    </svg>
                    </div>
                </div>
                <div className="flex justify-between pt-5">
                    <div className="font-semibold text-xl">₹{amount}</div>
                    <div>{orderCount ?
                        <div className="flex justify-between ">
                            <div className="underline underline-offset-2">{orderCount} order(s) </div>
                            <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>
                            </div>
                        </div> : null}
                    </div>
                </div>
            </div>

            <div className="flex justify-between bg-sky-800 rounded-lg h-10 items-center px-6">
                <div>Next Payment Date</div>
                <div>{paymentDate}</div>
            </div>
        </div>
    </div> 
    
}