import React from 'react'
import DashboardLayout from '../../components/DashboardLayout'
import TransactionTable from './TransactionTable'

const Transaction = () => {
  return (
      <DashboardLayout title="Transaction">
        <div>
          <TransactionTable/>
        </div>
      </DashboardLayout>
  )
}

export default Transaction