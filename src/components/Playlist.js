
import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faPlay, faEllipsis, faClock, } from '@fortawesome/free-solid-svg-icons'
import banner from '../img/foto9.jpg';

import { useEffect, useState } from 'react';

function Playlist() {

  const [play, setPlay] = useState([])
  const [song, setSongs] = useState([])
  useEffect(() => {
    const API = async () => {
      const response = await fetch("https://api.audioboom.com/channels/4929680/audio_clips")
      const data = await response.json()
      const playAux = data.body.audio_clips.map(item => {
        return {
          id: item.id,
          title: item.channel.title,
          img: item.channel.urls.logo_image.original,
        }
      })
      setPlay(playAux)
      const songAux = data.body.audio_clips.map(item => {
        return {
          id: item.id,
          channel: item.channel.title,
          duration: item.duration,
        }
      })
      setSongs(songAux)
    }
    API()
  }, [])

  return (
    <div className='box-home box-home-playlist'>
      <div className='box-banner'>
        <img src={banner} alt="" />
        <div className='banner-text'>
          <p>Playlist</p>
          <h1>{play.title}</h1>
          <div className='banner-span'>
            <span>Podcast - True Crime Obsessed</span>
            <span> Spotif 4,837,048 likes 306 songs, 2 hr 59 min</span>
          </div>
        </div>
      </div>

      <div className='box-playlist'>
        <div className='box-item'>
          <div className='circle-play'>
            <a href=""> <FontAwesomeIcon icon={faPlay} /></a>
          </div>
          <button><FontAwesomeIcon icon={faHeart} /></button>
          <button> <FontAwesomeIcon icon={faEllipsis} /></button>
        </div>
      </div>

      <div className='box-playlist-audio box-playlist'>
        <div className='row head-playlist box-text-playlist'>
          <div className='col-5 playlist-text-title'>
            <p>#</p>
            <p>TITLE</p>
          </div>
          <div className='col-3'>
            <p>CHANNEL</p>
          </div>
          <div className='col-2'>
            <p>DATE ADDED</p>
          </div>
          <div className='col-2'>
            <p><FontAwesomeIcon icon={faClock} /></p>
          </div>
        </div>

        {song.map(item => {
          return (
            <div className='row box-table'>
              <div className='col-5'>
                <div className='playlist-table color-p'>
                  <span>1</span>
                  <a href=""><FontAwesomeIcon icon={faPlay} /></a>
                  <img src={banner} alt="" />
                  <p>hola</p>
                </div>
              </div>
              <div className='col-3 color-p'>
                <div>
                  <p>{item.channel}</p>
                </div>
              </div>
              <div className='col-2 color-p'>
                <p>a day ago</p>
              </div>
              <div className='col-2 color-p'>
                <p>{item.duration}</p>
              </div>
            </div>
          )
        })}

      </div>
    </div>
  );
}

export default Playlist;