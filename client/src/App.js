import React, {useEffect, useState, createContext} from 'react'
import axios from "axios";
import Results from './Components/Results';
import Loading from "./Components/Loading"
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Favorites from './Components/Favorites';
import Navbar from "./Components/Navbar"
import Search from './Components/Search';
import Footer from './Components/Footer';

export const AppContext = createContext();

function App() {

//data that will be fetched form the server
const[backendData, setBackendData] = useState([{}]);

const [search, setSearch] = useState("");
const [mediaType, setMediaType] = useState("");
const [favorite, setFavorites] = useState([]);


//fetch the data from the server when the user searches for something if it exists
// useEffect(()=>{
//   fetch("/api/search",{headers : { 
//     'Content-Type': 'application/json',
//     'Accept': 'application/json'
//    }})
//    .then(response => console.log(response))
//    .then(data => console.log(data))
//    .catch(error => console.error('Unable to get items.', error));
// },[setSearch])
  
  
  useEffect(()=>{
  fetch("http://localhost:5000/api/search",{headers : { 
    'Content-Type': 'application/json',
    'Accept': 'application/json'
   }}).then( response=> response.json() )
  .then( data => setBackendData(data))
},[setSearch])
  
  
//post search parameters  search and media-type to the server 
  function searchTitles()
  { 
    axios.post("/api",{
      search,
      mediaType
    }).then((res)=>{console.log(res)})
    .catch((err)=> {console.log(err)});
  }  

  //add an item to the users favorite list
  function addToFavoriteArray(i)
  {
    let addFavoriteToArray =backendData.results[i];
    setFavorites(prevFavorites =>{
      return [...prevFavorites, addFavoriteToArray]
    });
 
    alert("Added to favorites")
  }

  //remove an item from the users favorites list 
  function removeFromFavoriteArray(i){
    setFavorites(prevFavorites =>{
      return prevFavorites.filter((fave,index)=>{
          return index !== i
      });
    });
   
    alert("Removed item from favorites")
  }

  return (
       <div>
       <BrowserRouter>
       <Navbar/> 
        <Switch>
        <AppContext.Provider value = {{backendData, favorite, setFavorites, removeFromFavoriteArray,searchTitles,search,setSearch, setMediaType}}>
          <Route exact path="/" >    
              <Search/>

            <div className="result-Heading">
            
            </div>
              {(backendData.resultCount===0) ? <div className="no-Results"></div> :
              <div className="results">
              
                {(typeof backendData.results ==="undefined") ?
                  (<Loading/>) : 
                  (backendData.results.map((result, i) => {
                    return(
                      <div className="card-container" >
                      <Results
                        key={i}
                        id={i}
                        artworkUrl100={result.artworkUrl100}
                        artistName={result.artistName}
                        trackName={result.trackName}
                        kind={result.kind}
                        previewUrl={result.previewUrl}
                        trackLength={result.trackTimeMillis}
                        handleFave={()=> addToFavoriteArray(i)}
                    
                      />
                      </div> 
                    )}))
                  }
                 
            </div>
            }
          </Route>

          <Route path="/Favorites">
            <Favorites/>        
          </Route>

          </AppContext.Provider>
        </Switch>
        
       </BrowserRouter>
       <Footer/>       
</div> 
)}
export default App
