import React from 'react'
import DashboardLayout from '../../components/DashboardLayout'
import RegistrationForm from './RegistrationForm'
import ContactLeft from './ContactLeft'

const Support = () => {
  return (
    <DashboardLayout title="Support">
      <div className='flex w-[960px] justify-around ml-5 mt-5'>

        <ContactLeft/>
        <RegistrationForm/>
      </div>

    </DashboardLayout>
  )
}

export default Support