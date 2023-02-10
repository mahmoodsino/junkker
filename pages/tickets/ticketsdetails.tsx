import React from 'react'
import { TicketsDetailsMainSection } from '../../components'
import withAuth from '../../helper/with-auth'

const ticketsdetails = () => {
  return (
    <div>
      <TicketsDetailsMainSection />
    </div>
  )
}

export default withAuth( ticketsdetails)
