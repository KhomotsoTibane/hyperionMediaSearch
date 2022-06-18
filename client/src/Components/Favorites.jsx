import React, { useContext } from 'react'
import { AppContext } from '../App'
import Results from './Results'

function Favorites() {

  const {favorite, removeFromFavoriteArray, favoriteIconStyle} = useContext(AppContext)
  return (
          <div>
            <div className="result-Heading">
            <h1 className="result-HeadingText">Favorites</h1>
            </div>
             {(favorite.length===0) ? <div className="no-Results"><h1>No items have been added to favorites</h1></div> :
              <div className="results">    
              {(typeof favorite ==="undefined") ?
                <h1 className="fv">No faves found</h1> : 
                (favorite.map((result, i) => {
                  return(
                    <div className="card-container">
                    <Results
                      key={i}
                      id={i}
                      artworkUrl100={result.artworkUrl100}
                      artistName={result.artistName}
                      trackName={result.trackName}
                      kind={result.kind}
                      previewUrl={result.previewUrl}
                      trackLength={result.trackTimeMillis}
                      handleFave={()=> removeFromFavoriteArray(i)}
                      hearted={favoriteIconStyle}
                    />
                    </div> 
                  )
                })
              )}     
            </div>
          }
          </div>
  )}

export default Favorites;