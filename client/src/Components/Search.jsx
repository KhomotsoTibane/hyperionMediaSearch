import React,{useContext} from 'react'
import {AppContext} from "../App"

function Search() {
    const  {searchTitles, search, setSearch, setMediaType} = useContext(AppContext)
  return (
    <div> <form  className="search" onSubmit={searchTitles}>
    <input
      value={search}
      onChange={event => setSearch(event.target.value)}
      placeholder="Search..."
      type="text" />
    
      <select className="media-types" onChange={event=> setMediaType(event.target.value)}>
          <option value="all">All</option>
          <option value="music">Music</option>
          <option value="podcast">Podcast</option>
          <option value="musicVideo">Music Video</option>
          <option value="audiobook">Audio Book</option>
          <option value="shortFilm">Short Film</option>
          <option value="software">Software</option>
          <option value="movie">Movie</option>
          <option value="ebook">EBook</option>
          <option value="tvShow">Tv Show</option>
      </select>
      <button type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
  </form></div>
  )
}

export default Search