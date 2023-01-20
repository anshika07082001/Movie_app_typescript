import React, { useContext, useEffect, useState } from 'react'
import {movieContext} from '../App'
import { movieData } from '../Type'

const MovieList = () => {
    const movies =useContext(movieContext)
    var [defaultState,SetDefaultState]=useState<movieData[]>(movies.movies)
    
    useEffect(()=>{
        if(movies.searchedArr.length>0){
            SetDefaultState([...movies.searchedArr])
        }
        else{
            SetDefaultState(movies.movies)
        }
    },[movies]) 

  return (
    <div className='col-10 mt-4 shadow bg-light rounded d-flex align-items-center p-2 flex-column'>
        <h3 className='text-center'>Movies List</h3>
        {defaultState.sort((a,b)=>{
        return parseFloat(b.duration)-parseFloat(a.duration)}).map((item)=>{
            return(
            <div className='col-11 p-2 justify-content-between d-flex flex-row border-bottom border-2 border-success'>
                <div className='col-7 d-flex flex-column'>
                    <label className='fs-3'>{item.name}</label>
                    <span>{item.rate}/100</span>
                </div>
                <label>{item.duration}rs</label>
            </div>
            )
        })}
    </div>
  )
}

export default MovieList