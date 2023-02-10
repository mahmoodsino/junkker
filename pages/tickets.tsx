import React from 'react'
import { TicketsMainSection } from '../components'
import withAuth from '../helper/with-auth'

const tickets = () => {
  return (
    <div>
      <TicketsMainSection />
    </div>
  )
}

export default withAuth(tickets)
