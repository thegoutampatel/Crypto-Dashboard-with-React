import SideDrawer from "./SideDrawer"
import SideNav from "./SideNav"
import TopNav from "./TopNav"

const DashboardLayout = ({title, children}) => {
  return (
    <div className='flex'>
      <SideNav/>
      <div>
        <TopNav title={title}/>
        <div className="max-w-[1440px] h-[900px]">
            {children}
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout