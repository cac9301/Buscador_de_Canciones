import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import axios from "axios";
import Song from './components/Song';
import Info from './components/Info';


function App() {
  //states
  const [looksong, setlooksong] = useState({});
  const [lyrics, setlyrics] = useState("");
  const [info, setInfo] = useState({});
  //effects
  
  useEffect(() => {
    const consultarApi = async () => {
      
      const { artista, canción } = looksong;
      if(artista===""|| canción==="")return;
      const url = `https://api.lyrics.ovh/v1/${artista}/${canción}`;
      const url2 = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artista}`;

      const [lyrics, information] = await Promise.all([
        axios(url),
        axios(url2)
      ]);
      
      setInfo(information.data.artists[0]);
      setlyrics(lyrics.data.lyrics);
      //setInfo(information.data.artists[0]);
    };
    consultarApi();
  }, [looksong, info]);
  return (
    <>
      <Form setlooksong={setlooksong} />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <Info info={info} />
          </div>
          <div className="col-md-6">
            <Song lyrics={lyrics} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
