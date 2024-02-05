import { useEffect, useRef, useState } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import UserCard from './components/UserCard'
import LocationCard from './components/LocationCard'


function App() {
  const [finder, setFinder] = useState(Math.floor(Math.random() * 126 + 1))
  const [getApi, data, error, loading] = useFetch()
  const universNum = useRef()

  const handleSumbit = e => {
    e.preventDefault()
    setFinder(universNum.current.value.trim())
  }

  useEffect(() => {
    const url = `https://rickandmortyapi.com/api/location/${finder}`
    getApi(url)
  }, [finder])
  

  return (
    <div className='app'>
      <header className='header'>
       <img src="https://i.redd.it/eg7w8d3e6rhz.png" alt="" />
      </header>


      {
        loading ?
          <>
            <h2>Loading...</h2>
            <img src="https://cdn.pixabay.com/animation/2023/03/20/02/45/02-45-27-186_512.gif" alt="cargando" />
          </>
          :
          <>
<br />

            <form onSubmit={handleSumbit} className='appForm'>
              <input
                type="number"
                ref={universNum}
                placeholder='Type a number (1 to 126)'
                className='appText'
              />
              <button type='submit' className='appBtn'>Search</button>
            </form>

            {
              error || finder === '0'?
                <h2>&#10060; Hey! you must provide an id from 1 and 126 &#128549;</h2>
                :
                <>
                  <LocationCard
                    data={data}
                  />
                  <div className='appContent'>
                  {
                    data?.residents.map(resident => (
                      <UserCard
                        key={resident}
                        url={resident}
                      />
                    ))
                  }
                  </div>
                </>
            }
          </>
      }
    </div>
  )
}

export default App
