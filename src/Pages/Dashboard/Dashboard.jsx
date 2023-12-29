import DashboardLayout from '../../components/DashboardLayout'
import PortfolioSection from './components/PortfolioSection'
import CurrentAndRecentPrice from './components/CurrentAndRecentPrice'


function Dashboard() {
  return (
    <DashboardLayout title="Dashboard">
      <div className='flex flex-col items-center'>
        <PortfolioSection/>
        <CurrentAndRecentPrice/>
      </div>
    </DashboardLayout>
  )
}

export default Dashboard