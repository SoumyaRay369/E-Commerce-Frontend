export const  OverviewHeader = ({overviewTitle, periodSelector}) => {
    return <>
        <br />
        <div className="flex justify-between px-4 z-50">
            <div className="text-xl font-semibold">{overviewTitle}</div>
            <button className="border px-2 py-2 rounded flex space-x-2 text-gray-500 ">
                <div >{periodSelector}</div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>

            </button>
        </div>
        <br />
    </>
}