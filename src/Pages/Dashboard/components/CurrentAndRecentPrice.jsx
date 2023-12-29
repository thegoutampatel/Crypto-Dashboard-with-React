import { IoIosAdd } from "react-icons/io";
import { FaMinus } from "react-icons/fa6";

const CurrentAndRecentPrice = () => {
  const arryTime = ["7:15 PM", "12:55 AM", "6:35 AM", "12:15 PM", "5:55 PM"];
  
    return (
    <div className="flex gap-6 mt-4">
        <div className='h-[345px] w-[468px] bg-white rounded-lg'>
            <div className="flex justify-around items-center mt-4">
                <div className="">
                    <p className="text-[#535D66] text-[14px]">Current Price</p>
                    <div className="flex gap-3 items-center">
                        <p className="text-[16px]">₹26,670.25</p>
                        <p className="text-[14px] text-[#059669]">0.04%</p>
                    </div>
                </div>

                <div className="flex gap-4">
                <button className='bg-[#5F00D9] py-[8px] px-[8px] rounded-[10px] text-white text-center flex items-center gap-2'><IoIosAdd />BUY</button>
                <button className='bg-[#5F00D9] py-[8px] px-[8px] rounded-[10px] text-white text-center flex items-center gap-2'><FaMinus /> SELL</button>
                </div>
            </div>

            <div className="mt-[120px]">
                <img src="/public/Vector.png" alt="" width={468} height={300}/>
            </div>

            <div className="flex gap-10 justify-center">
            {
            arryTime.map((time) => (
                <div key={time} className="">
                     <p className="text-[12px] text-[#797E82]">{time}</p>
                </div>
                 ))
            }

            </div>
        </div>




        <div className='h-[345px] w-[468px] bg-white rounded-lg items-center justify-center'>
            
            <div className="flex items-start ml-6 mt-4">
                <div className="">
                    <p className="text-[#535D66] text-[14px]">Recent Transactions</p>
                </div>         
            </div>

            <div className="mb-5 ml-5 mt-3">
                <img src="./public/graph.png" alt="" width={400}/>
            </div>
           
            <button className=" text-center  w-[420px] ml-6 rounded-md bg-[#EEEEF4]">View All</button>
        </div>
    </div>
  )
}

export default CurrentAndRecentPrice