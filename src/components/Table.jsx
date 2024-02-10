export const Table = () => {
    return <>
        <div className="px-4 overflow-x-auto">
            <table class="table-auto w-full overflow-x-auto">
                <thead className="bg-gray-300 ">
                    <tr>
                        <th className="text-left space-x-2">Order ID</th>
                        <th className="text-left space-x-2">Status</th>
                        <th className="text-left space-x-2">Transaction ID</th>
                        <th className="text-left space-x-2">Refund Date</th>
                        <th className="text-right space-x-2">Order Amount</th>
                    </tr>
                </thead>
                <tbody>
                    <tr >
                        <td className="py-3 border-b text-blue-500 font-semibold ">#281209</td>
                        <td className="py-3 border-b">Successful</td>
                        <td className="py-3 border-b">	TRX123456</td>
                        <td className="py-3 border-b">		Today, 8:45 PM</td>
                        <td className="py-3 border-b text-right">₹1125.00</td>

                    </tr>
                    <tr>
                        <td className="py-3 border-b text-blue-500 font-semibold">#281210</td>
                        <td className="py-3 border-b">Processing</td>
                        <td className="py-3 border-b">	TRX789012</td>
                        <td className="py-3 border-b">		Tomorrow, 10:00 AM</td>
                        <td className="py-3 border-b text-right">₹750.00</td>

                    </tr>
                    <tr>
                        <td className="py-3 border-b text-blue-500 font-semibold">#281211</td>
                        <td className="py-3 border-b">Successful</td>
                        <td className="py-3 border-b">TRX345678</td>
                        <td className="py-3 border-b">	Yesterday, 3:30 PM</td>
                        <td className="py-3 border-b text-right">	₹750.00</td>
                    </tr>
                    <tr>
                        <td className="py-3 border-b text-blue-500 font-semibold">#281212</td>
                        <td className="py-3 border-b">Successful</td>
                        <td className="py-3 border-b">TRX901234</td>
                        <td className="py-3 border-b">	Today, 11:20 AM</td>
                        <td className="py-3 border-b text-right">₹2000.00</td>
                    </tr>
                    <tr>
                        <td className="py-3 border-b text-blue-500 font-semibold">#281213</td>
                        <td className="py-3 border-b">Processing</td>
                        <td className="py-3 border-b">	TRX567890</td>
                        <td className="py-3 border-b">		Tomorrow, 9:00 AM</td>
                        <td className="py-3 border-b text-right">₹1800.00</td>
                    </tr>
                    <tr>
                        <td className="py-3 border-b text-blue-500 font-semibold">#281214</td>
                        <td className="py-3 border-b">Processing</td>
                        <td className="py-3 border-b">TRX098765</td>
                        <td className="py-3 border-b">	Yesterday, 2:00 PM</td>
                        <td className="py-3 border-b text-right">₹500.00</td>
                    </tr>
                    <tr>
                        <td className="py-3 border-b text-blue-500 font-semibold">#281215</td>
                        <td className="py-3 border-b">Successful</td>
                        <td className="py-3 border-b">TRX456789</td>
                        <td className="py-3 border-b">	Today, 10:30 AM</td>
                        <td className="py-3 border-b text-right">₹3000.00</td>
                    </tr>
                    <tr>
                        <td className="py-3 border-b text-blue-500 font-semibold">#281216</td>
                        <td className="py-3 border-b">Processing</td>
                        <td className="py-3 border-b">TRX987654</td>
                        <td className="py-3 border-b">	Tomorrow, 11:30 AM</td>
                        <td className="py-3 border-b text-right">₹1200.00</td>
                    </tr>
                    <tr>
                        <td className="py-3 border-b text-blue-500 font-semibold">#281217</td>
                        <td className="py-3 border-b">Processing</td>
                        <td className="py-3 border-b">TRX654321</td>
                        <td className="py-3 border-b">	Yesterday, 4:00 PM</td>
                        <td className="py-3 border-b text-right">₹900.00</td>
                    </tr>
                    <tr>
                        <td className="py-3 border-b text-blue-500 font-semibold">#281218</td>
                        <td className="py-3 border-b">Successful</td>
                        <td className="py-3 border-b">TRX234567</td>
                        <td className="py-3 border-b">	Yesterday, 4:00 PM</td>
                        <td className="py-3 border-b text-right">₹1500.00</td>
                    </tr>
                    <tr>
                        <td className="py-3 border-b text-blue-500 font-semibold">#281219</td>
                        <td className="py-3 border-b">Successful</td>
                        <td className="py-3 border-b">	TRX567890</td>
                        <td className="py-3 border-b">	Tomorrow, 9:00 AM</td>
                        <td className="py-3 border-b text-right">₹2500.00</td>
                    </tr>
                    
                </tbody>
            </table>
        </div>
        
    </>
}