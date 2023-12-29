import { HiMiniSquares2X2 } from "react-icons/hi2";
import { MdCompareArrows } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { Link } from "react-router-dom";
import Dashboard from "../Pages/Dashboard/Dashboard";

const SideNav = () => {
  return (
    <div className="w-[256px] h-[100vh] pt-3 pl-5 flex flex-col justify-between shadow-lg pr-3 bg-white">
      <div>
        <h1 className="text-[20px] text-blue-700 mt-3 select-none cursor-pointer">@DoSomeThing</h1>
        <div className="flex flex-col gap-3 mt-2">
          <Link to="/dashboard" className="flex gap-3 text-[16px] items-center py-3 px-4 hover:bg-[#F3F3F7] rounded-sm text-[#797E82] hover:text-black cursor-pointer">
            <HiMiniSquares2X2 />
            <p>Dashboard</p>
          </Link>
          <Link to="/transaction" className="flex gap-3 text-[16px] items-center py-3 px-4 hover:bg-[#F3F3F7] rounded-sm text-[#797E82] hover:text-black cursor-pointer">
            <MdCompareArrows />
            <p>Transaction</p>
          </Link>
        </div>
      </div>
      
      <Link to="/support" className="flex gap-3 text-[16px] items-center mb-3 py-3 px-4 hover:bg-[#F3F3F7] rounded-sm text-[#797E82] hover:text-black cursor-pointer">
        <BiSupport />
        <p>Support</p>
      </Link>
    </div>
  );
}

export default SideNav;
