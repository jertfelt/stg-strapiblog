import React from 'react'
import {Link} from "react-router-dom"

export default function SiteHeader() {
  return (
    <div className="header">
      <Link to="/"><h1>Stg spelar spel</h1></Link>
    </div>
  )
}
