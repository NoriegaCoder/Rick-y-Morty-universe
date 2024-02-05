import React from 'react'
import './styles/LocationCard.css'

const LocationCard = ({data}) => {
    
console.log(data)

  return (
    <section className='location'>
        <h2 className='locationTitle'>{data?.name}</h2>
        <ul className='locationList'>
            <li className='locationItem'><span>Type:</span> {data?.type}</li>
            <li className='locationItem'><span>Dimension:</span> {data?.dimension}</li>
            <li className='locationItem'><span>population:</span> {data?.residents.length}</li>
        </ul>
        
    </section>
  )
}

export default LocationCard