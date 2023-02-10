import React from 'react'
import { BuyingMainSEction } from '../components'
import withAuth from '../helper/with-auth'

const buying = () => {
  return (
    <div>
      <BuyingMainSEction/>
    </div>
  )
}

export default withAuth( buying)
