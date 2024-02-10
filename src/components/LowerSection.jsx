export const LowerSection = () => {
    return <>
        <div className="flex flex-col gap-6 px-4">
            <div className="text-xl font-semibold">Transactions | This Month</div>
            <div className="space-x-3">
                <button className="bg-gray-300 text-gray-500 rounded-2xl px-3 py-1">Payouts (22)</button>
                <button className="bg-sky-700 text-white rounded-2xl px-3 py-1">Refunds (26)</button>
            </div>
        </div>
    </>
}