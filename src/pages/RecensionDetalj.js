import React from 'react'
import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"

export default function RecensionDetalj() {
  
  const { id } = useParams()

  const {loading, error, data} =useFetch("http://localhost:1337/api/recensions/" + id)
  
  const shortData = data.data.attributes;

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error!</p>

  return (
    <div className="detaljer--content">
      { <div className="recension--div">
        <div className='rating'>{shortData.betyg}</div>
          <h2>{shortData.title}</h2>
          <small>Console List</small>
          <p>{shortData.text}</p>
      </div>}
    </div>
  )
}
