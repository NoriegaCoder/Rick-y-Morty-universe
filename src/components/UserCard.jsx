import React, { useEffect } from 'react'
import useFetch from '../hooks/useFetch'
import './styles/UserCard.css'

const UserCard = ({ url }) => {

  const [getResident, resident, error, loading] = useFetch()

  useEffect(() => {
    getResident(url)

  }, [])

  //console.log(resident)

  return (
    <article className='resident'>
      <figure className='residentPhoto'>
        <img src={resident?.image} alt="Profile picture" />
        <figcaption className='residentStatus'>
          <div className={`residentCircle ${resident?.status}` }></div>
          <p>{resident?.status}</p>
        </figcaption>
      </figure>
      <h3 className='residentName'>{resident?.name}</h3>
      <hr />
      <ul className='residentList'>
        <li className='residentItem'><span>Specie</span><span>{resident?.species}</span></li>
        <li className='residentItem'><span>Origin</span><span>{resident?.origin.name}</span></li>
        <li className='residentItem'><span>episodes when they appear</span><span>{resident?.episode.length}</span></li>
      </ul>

    </article>
  )
}

export default UserCard