import React from 'react'
import { BlogMainSectoins } from '../components'
import withAuth from '../helper/with-auth'

const blog = () => {
  return (
    <div>
      <BlogMainSectoins/>
    </div>
  )
}

export default withAuth( blog)
