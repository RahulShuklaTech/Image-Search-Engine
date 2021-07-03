import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import Display from './Display';


 const getImages = async (setImages,setLoading,query)  => { 

    const URL =  query ? "https://api.pexels.com/v1/search?query="+query
    :"https://api.pexels.com/v1/curated";
    const key = "563492ad6f917000010000010f875e339e8a4174989ebea558cce4bf"
    setLoading(true);
    const response = await fetch(URL, { 
      method: "GET",
      headers: {
        "Authorization": key
      }
    })
    const data = await response.json();
    setLoading(false);
    
    setImages(data.photos);
    return data.photos;
 }

function App() {

  const [images,setImages] = useState([]);
  const [loading,setLoading]  = useState(false);
  const [search,setSearch] = useState("");

  useEffect(() => {
     getImages(setImages,setLoading);
    // setImages(images)
    
  },[])

  const handleAdd = () => {
    getImages(setImages,setLoading,search);
    setSearch("");
  } 
 
  if(loading) return <h1>Loading</h1>
  console.log(`images`, images)

  return (
    <div className="App">
      <div className = "search-bar">
        <input type = "text" value = {search} onChange = {(e) => setSearch(e.target.value)} />
        <button onClick = {handleAdd}>Search</button>
      </div>
      <Display images = {images} />
    </div>
  );
}

export default App;
