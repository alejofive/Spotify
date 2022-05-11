
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react';

function Header() {

  const [songs, setSongs] = useState([])
  useEffect(() => {
    const API = async () => {
      const response = await fetch("https://api.audioboom.com/channels/recommended?category_ids[]=176")
      const data = await response.json()
      const songsAux = data.body.map(item => {
        return {
          id: item.id,
          title: item.title,
          description: item.description,
          image: item.urls.logo_image.original,
        }
      })
      setSongs(songsAux)
    }
    API()
  }, [])

  return (
    <div className='box-header box-home'>
      <div className='box-potcas'>
        <h1>Everything</h1>
        <div className='row gap20 box-cards '>
          {songs.map(item => (

            <a href="" className='col-2 item-card'>
              <div className='item-card-shadow'>
                <img src={item.image} alt="" />
                <div className="circle-play-card circle-play ">
                  <a href=""> <FontAwesomeIcon icon={faPlay} /></a>
                </div>
                <div className='box-text-card'>
                  <h3>{item.title}</h3>
                  <p>{item.description} </p>
                </div>
              </div>
            </a>

          ))}
        </div>
      </div>
    </div>
  );
}

export default Header;