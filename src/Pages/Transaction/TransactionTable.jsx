import { GoDownload } from "react-icons/go";
const TransactionTable = () => {
  return (
    <div className="flex flex-col items-center">
        <div className="mt-5 ml-[900px] ">
            <button className='bg-[#5F00D9] py-[10px] px-[16px] rounded-[10px] text-white text-center flex items-center gap-1'><GoDownload /> Export CSV</button>
        </div>

        <div className="w-[960px] mt-6">
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg p-4">
            <table className="w-full text-sm text-left text-gray-500 border-collapse">
                <thead className="text-xs text-gray-700 uppercase bg-white">
                <tr>
                    <th className="py-2">
                    <div className="flex items-center">
                        <input
                        id="checkbox-all"
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <label htmlFor="checkbox-all" className="sr-only">
                        checkbox
                        </label>
                    </div>
                    </th>
                    <th className="py-2">ID</th>
                    <th className="py-2">Date & Time</th>
                    <th className="py-2">Type</th>
                    <th className="py-2">Amount</th>
                    <th className="py-2">Status</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>
                    <div className="flex items-center">
                        <input
                        id="checkbox-table-1"
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <label htmlFor="checkbox-table-1" className="sr-only">
                        checkbox
                        </label>
                    </div>
                    </td>
                    <td>HD82NA2H</td>
                    <td>2022-06-09 07:06 PM</td>
                    <td>INR Deposit</td>
                    <td className="text-green-500">+ 781,123.10</td>
                    <td className="text-yellow-500">Pending</td>
                </tr>
                <tr>
                    <td>
                    <div className="flex items-center">
                        <input
                        id="checkbox-table-2"
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <label htmlFor="checkbox-table-2" className="sr-only">
                        checkbox
                        </label>
                    </div>
                    </td>
                    <td>HD82NA2H</td>
                    <td>2022-06-07 02:48 PM</td>
                    <td>INR Withdraw</td>
                    <td className="text-red-500">- 781,123.10</td>
                    <td className="text-blue-500">Processing</td>
                </tr>
                <tr>
                    <td>
                    <div className="flex items-center">
                        <input
                        id="checkbox-table-3"
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <label htmlFor="checkbox-table-3" className="sr-only">
                        checkbox
                        </label>
                    </div>
                    </td>
                    <td>HD82NA2H</td>
                    <td>2022-06-04 09:21 AM</td>
                    <td>Buy</td>
                    <td className="text-green-500">+ 12.48513391 BTC</td>
                    <td className="text-gray-500">Cancelled</td>
                </tr>
                <tr>
                    <td>
                    <div className="flex items-center">
                        <input
                        id="checkbox-table-4"
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <label htmlFor="checkbox-table-4" className="sr-only">
                        checkbox
                        </label>
                    </div>
                    </td>
                    <td>HD82NA2H</td>
                    <td>2022-06-03 01:32 PM</td>
                    <td>Sell</td>
                    <td className="text-red-500">- 0.36401628 BTC</td>
                    <td className="text-green-500">+ $19,378.84</td>
                </tr>
                <tr>
                    <td>
                    <div className="flex items-center">
                        <input
                        id="checkbox-table-5"
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <label htmlFor="checkbox-table-5" className="sr-only">
                        checkbox
                        </label>
                    </div>
                    </td>
                    <td>HD82NA2H</td>
                    <td>2022-06-03 09:02 AM</td>
                    <td>BTC Deposit</td>
                    <td className="text-green-500">+ 4.13946104 BTC</td>
                    <td className="text-green-500">+ $37,929.31</td>
                </tr>
                <tr>
                    <td>
                    <div className="flex items-center">
                        <input
                        id="checkbox-table-6"
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <label htmlFor="checkbox-table-6" className="sr-only">
                        checkbox
                        </label>
                    </div>
                    </td>
                    <td>HD82NA2H</td>
                    <td>2022-06-01 01:56 PM</td>
                    <td>BTC Withdraw</td>
                    <td className="text-red-500">- 10.00000000 BTC</td>
                    <td className="text-gray-500">-$62,017.58 Completed</td>
                </tr>
                {/* Additional rows */}
                <tr>
                    <td>
                    <div className="flex items-center">
                        <input
                        id="checkbox-table-7"
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <label htmlFor="checkbox-table-7" className="sr-only">
                        checkbox
                        </label>
                    </div>
                    </td>
                    <td>NewID1</td>
                    <td>2023-01-01 12:00 PM</td>
                    <td>New Transaction Type</td>
                    <td className="text-green-500">+ 1000.00</td>
                    <td className="text-yellow-500">Pending</td>
                </tr>
                <tr>
                    <td>
                    <div className="flex items-center">
                        <input
                        id="checkbox-table-8"
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <label htmlFor="checkbox-table-8" className="sr-only">
                        checkbox
                        </label>
                    </div>
                    </td>
                    <td>NewID2</td>
                    <td>2023-01-02 03:30 PM</td>
                    <td>Another Transaction Type</td>
                    <td className="text-red-500">- 500.00</td>
                    <td className="text-blue-500">Processing</td>
                </tr>
                </tbody>
            </table>
            </div>
        </div>

    </div>
  )
}

export default TransactionTable