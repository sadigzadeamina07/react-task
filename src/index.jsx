import { createRoot } from "react-dom/client";
import Card from "./Card";
import "./index.css";
const data = [
  {
    id: 1,
    title: "Blinding Lights",
    artist: "The Weeknd",
    duration: "3:20",
    cover: "../public/assets/img/1.jpeg"
  },
  {
    id: 2,
    title: "Levitating",
    artist: "Dua Lipa",
    duration: "3:23",
    cover: "../public/assets/img/2.jpeg"
  },
  {
    id: 3,
    title: "Shape of You",
    artist: "Ed Sheeran",
    duration: "4:02",
    cover: "../public/assets/img/3.jpg"
  },
  {
    id: 4,
    title: "Starboy",
    artist: "The Weeknd",
    duration: "3:50",
    cover: "../public/assets/img/4.png"
  },
  {
    id: 5,
    title: "Peaches",
    artist: "Justin Bieber",
    duration: "3:18",
    cover: "../public/assets/img/5.jpeg"
  },
  {
    id: 6,
    title: "Bad Guy",
    artist: "Billie Eilish",
    duration: "3:14",
    cover: "../public/assets/img/6.jpeg"
  },
  {
    id: 7,
    title: "As It Was",
    artist: "Harry Styles",
    duration: "2:47",
    cover: "../public/assets/img/7.jpg"
  },
  {
    id: 8,
    title: "Stay",
    artist: "The Kid LAROI & Justin Bieber",
    duration: "2:21",
    cover: "../public/assets/img/8.jpeg"
  }
];

createRoot(document.getElementById('root')).render(
    <div style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: "20px",
      padding: "20px"

    }}>
    <h1 style={{ 'font-size': '60px'  , color:'orange'}}>Music</h1>
    <div style={{display:'flex' ,gap:'30px ', flexWrap:'wrap'}} >
        {data.map((item)=> <Card  key={item.id} song={item} /> )}
    </div>
    </div>

)
