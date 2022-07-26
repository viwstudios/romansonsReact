import React, {useEffect} from 'react'
import BlogMain from '../Blog/BlogMain'

const BlogPage = () => {
  useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
  return (
    <div>
      <BlogMain/>
    </div>
  )
}

export default BlogPage