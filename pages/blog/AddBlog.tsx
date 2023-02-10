import React from 'react'
import { AddBlogMainSection } from '../../components'
import withAuth from '../../helper/with-auth'

const AddBlog = () => {
  return (
    <div>
      <AddBlogMainSection />
    </div>
  )
}

export default withAuth( AddBlog)
