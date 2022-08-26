import React from 'react'
// import useFetch from "../hooks/useFetch"
import { Link } from 'react-router-dom';
import {useQuery, gql} from "@apollo/client";

const REVIEWS = gql`
query GetReviews {
  recensions {
    data {
      id
      attributes {
        title,
        text,
        betyg
      }
    }
  }
}
`


export default function Homepage() {
  // const {loading, error, data} = useFetch("http://localhost:1337/api/recensions");
  const {loading, error, data} = useQuery(REVIEWS);

  console.log(REVIEWS)
  console.log(REVIEWS.data)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error!</p>

  return (
  <div className="homepage--content">
      {REVIEWS.data.map((item) => (
        <div key={item.id} className="recension--div">
          <div className='rating'>{item.attributes.betyg}</div>
            <h2>{item.attributes.title}</h2>
            <small>Console List</small>
            <p>{item.attributes.text.substring(0,200)}...</p>
            <Link to={`/recensions/${item.id}`}>Läs mer</Link>
        </div>
      ))}
    </div>
  )
}
