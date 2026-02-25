import React, { useState } from "react";
import "./card.css";

function Card({ song }) {
  const { title, artist, duration, cover, tracks } = song;
  const [liked, setLiked] = useState(false);

  return (
    <div className="card">
      <div className="cover-wrap">
        <img src={cover} alt={title} className="cover-img" />
             <button className="play-btn">
          <i className="fa-solid fa-play"></i>
        </button>
        <button className='heart-btn'>
       <i class="fa-regular fa-heart"></i>
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