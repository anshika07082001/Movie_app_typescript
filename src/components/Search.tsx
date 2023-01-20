import React, { useContext, useRef } from 'react'
import {movieContext} from '../App'

const Search = () => {
    var {movies,searchedArr,setSearchedArr,setNotFound,notFound} =useContext(movieContext)
    var searchRef = useRef<HTMLInputElement>(null)
    
    // search function 
    const search=()=>{
        if(searchRef.current!==null){
            searchedArr=[]
            if(searchRef.current.value.length > 1){
                var flag:boolean=false
                var search = searchRef.current.value
                movies.map((item)=>{
                    if(item.name.slice(0,search.length).toLowerCase()==search.toLowerCase()){
                        searchedArr.push(item)
                        flag=true
                    }
                })
                if(flag){
                    if(setNotFound!==null){
                    setNotFound(flag)
                    }
                }
                else{
                    if(setNotFound!==null){
                        setNotFound(flag)
                        throw new Error('Movies not Found')
                    }
                }
            }
            if(searchRef.current.value.length==0){
                if(setNotFound!==null){
                setNotFound(true)
                }
            }
            if(setSearchedArr!==null){
                setSearchedArr([...searchedArr])
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