import React from 'react'

const Post = ({ params }: { params: { id: string} }) => {
   return (
      <div>
         hello world, this is the slug {params.id}
      </div>
   )
}

export default Post