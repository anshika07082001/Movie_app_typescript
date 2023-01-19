import React, { createContext, useEffect, useState } from 'react';
import './App.css';
import MovieForm from './components/MovieForm';
import MovieList from './components/MovieList';
import Search from './components/Search';
import { movieData } from './Type';

type context ={
  movies:movieData[]
  setMovies:React.Dispatch<React.SetStateAction<movieData[]>>|null
  searchedArr:movieData[]
  setSearchedArr:React.Dispatch<React.SetStateAction<movieData[]>>|null
}

export const movieContext = createContext<context>({movies:[],setMovies:null,searchedArr:[],setSearchedArr:null})

function App() {

  var [movies,setMovies]=useState<movieData[]>([])
  var [searchedArr,setSearchedArr]=useState<movieData[]>([])

  return (
    <div className="col-12">
      <nav className="navbar bg-dark">
        <img src="https://icon-library.com/images/movie-app-icon/movie-app-icon-27.jpg" alt="" width="80" className='ms-3' height="50"/>
        <label className='text-success fw-bold fs-3 me-auto ms-3'>Favorite Movie App</label>
      </nav>
      <div className='col-12 d-flex flex-row'>
        <movieContext.Provider value={{movies:movies,setMovies:setMovies,searchedArr:searchedArr,setSearchedArr:setSearchedArr}}>
          <MovieForm/>
          <div className='col-6 p-2 d-flex flex-column'>
            <Search/>
            {movies.length>0 || searchedArr.length>0?
            <MovieList/>:<></>}
          </div>
        </movieContext.Provider>
      </div>
    </div>
  );
}

export default App;
