import React, { useState } from "react";
import { FaRegHeart,FaHeart ,FaPlay  } from "react-icons/fa";
import "./card.css";

function Card({ song }) {
  const { title, artist, duration, cover, tracks } = song;
  const [liked, setLiked] = useState(false);
const change=()=>{
setLiked(!liked)
}
  return (
    <div className="card">
      <div className="cover-wrap">
        <img src={cover} alt={title} className="cover-img" />
             <button className="play-btn">
<FaPlay />
        </button>
        <button className='heart-btn' onClick={change}>
{!liked ? <FaRegHeart /> :  <FaHeart color='red' />}
        </button>
      </div>
      <div className="card-content">
        <span>{tracks} Tracks</span>
        <h2>{title}</h2>
        <p className="artist">{artist}</p>
        <p className="duration">{duration}</p>
     
      </div>
      
    </div>
  );
}

export default Card;