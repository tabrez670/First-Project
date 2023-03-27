import React from 'react'

export default function BlogItem({blog}:any) {
  return (<>
    <div>{blog.title}</div>
    <div>{blog.description}</div>
  </>
  )
}
