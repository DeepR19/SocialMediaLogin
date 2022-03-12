import React from 'react'
import { Link } from 'react-router-dom'
export default function Card({data}) {
  return (
    <Link to={`/post/${data.id}`}>
      <div>{data.title}</div>
    </Link>
  )
}
