import React, { useContext, useRef } from 'react'
import {movieContext} from '../App'

const Search = () => {
    const movies =useContext(movieContext)
    var searchRef = useRef<HTMLInputElement>(null)

    const search=()=>{
        if(searchRef.current!==null){
            movies.searchedArr=[]
            if(searchRef.current.value.length>1){
                var search = searchRef.current.value
                movies.movies.map((item)=>{
                    if(item.name.slice(0,search.length).toLowerCase()==search.toLowerCase()){
                        movies.searchedArr.push(item)
                    }
                    else{
                        
                    }
                })
            }
            if(movies.setSearchedArr!==null){
                movies.setSearchedArr([...movies.searchedArr])
            }
        }
    }

    return (
      <div className='col-10 mt-5 shadow p-3 bg-light rounded'>
          <input className="form-control bg-success-subtle" onChange={search} ref={searchRef} placeholder='Search Your Favorite movie...'/>
      </div>
    )
}

export default Search