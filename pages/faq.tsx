import React from 'react'
import { FAQMainSection } from '../components'
import withAuth from '../helper/with-auth'

const faq = () => {
  return (
    <div>
      <FAQMainSection />
    </div>
  )
}

export default withAuth( faq)
