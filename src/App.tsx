import React, { createContext, useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import './App.css';
import ErrorComponent from './components/ErrorComponent';
import MovieForm from './components/MovieForm';
import MovieList from './components/MovieList';
import Search from './components/Search';
import { movieData } from './Type';

type context ={
  movies:movieData[]
  setMovies:React.Dispatch<React.SetStateAction<movieData[]>>|null
  searchedArr:movieData[]
  setSearchedArr:React.Dispatch<React.SetStateAction<movieData[]>>|null
  setNotFound:React.Dispatch<React.SetStateAction<boolean>>|null
}

export const movieContext = createContext<context>({movies:[],setMovies:null,searchedArr:[],setSearchedArr:null,setNotFound: null,})

var defaultMovies = [
  {name:'Harry potter',rate:'34',duration:'3h',found:false},
  {name:'The Avengers',rate:'34',duration:'2h',found:false},
  {name:'The Avatar',rate:'34',duration:'3.5h',found:false},
  {name:'The Aristotle',rate:'34',duration:'3h',found:false},
]

function App() {

  var [movies,setMovies]=useState<movieData[]>(defaultMovies)
  var [searchedArr,setSearchedArr]=useState<movieData[]>([])
  const [notFound, setNotFound] = useState<boolean>(true);

  return (
    <div className="col-12">
      <nav className="navbar bg-dark">
        <img src="https://icon-library.com/images/movie-app-icon/movie-app-icon-27.jpg" alt="" width="80" className='ms-3' height="50"/>
        <label className='text-success fw-bold fs-3 me-auto ms-3'>Favorite Movie App</label>
      </nav>
      <div className='col-12 d-flex flex-row'>
        <movieContext.Provider value={{movies:movies,setMovies:setMovies,searchedArr:searchedArr,setSearchedArr:setSearchedArr,setNotFound:setNotFound,}}>
          <ErrorBoundary FallbackComponent={ErrorComponent} onReset={()=>{setNotFound(false)}}>
          <MovieForm/>
          <div className='col-6 p-2 d-flex flex-column'>
            <Search/>
            {/* message renders during the error */}
            {notFound?
            <MovieList/>:
             <label className='text-danger mt-2 p-2  fs-3'>Results Not Found!!</label>}
          </div>
          </ErrorBoundary>
        </movieContext.Provider>
      </div>
    </div>
  );
}

export default App;
