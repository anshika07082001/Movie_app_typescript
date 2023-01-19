import React, { useContext, useRef } from 'react'
import {movieContext} from '../App'

const MovieForm = () => {
    const movies =useContext(movieContext)
    
    var nameRef= useRef<HTMLInputElement>(null)
    var rateRef = useRef<HTMLInputElement>(null)
    var durRef = useRef<HTMLInputElement>(null)

    const addMovie=(e:React.SyntheticEvent)=>{
        e.preventDefault()
        if(nameRef.current!==null && rateRef.current!==null && durRef.current!==null){
            if(nameRef.current.value!=='' && rateRef.current.value!=='' && durRef.current.value!==''){
                if(rateRef.current.value.match(/^0*(?:[1-9][0-9]?|100)$/) && durRef.current.value.charAt(durRef.current.value.length-1)=='h' || durRef.current.value.charAt(durRef.current.value.length-1)=='m'){
                    var duration= durRef.current.value
                    var dur:string[] = duration.split('')
                    var num =Number(dur.slice(0,dur.length-1).join(''))
                    if(duration.includes('m')){
                        var time = (1/60)*num
                        var obj ={name:nameRef.current.value,rate:rateRef.current.value,duration:time.toFixed(2).toString().concat('h')}
                    }
                    else{
                        obj ={name:nameRef.current.value,rate:rateRef.current.value,duration:durRef.current.value}
                    }
                    movies.movies.push(obj)
                    if(movies.setMovies!==null){
                        movies.setMovies([...movies.movies])
                    }
                }
                else{
                    alert('rating should be in range of 1 to 100 & duration should be in format of m/h')
                }
                nameRef.current.value=''
                rateRef.current.value=''
                durRef.current.value=''
            }
            else{
                alert('fill all details')
            }
        }
    }

    return (
      <div className='col-6 p-5'>
          <form className='shadow p-3 bg-light rounded' onSubmit={(e)=>addMovie(e)}>
              <div className="mb-3">
                <label className="form-label">Movie Name</label>
                <input className="form-control bg-success-subtle" placeholder='Enter movie Name...' ref={nameRef}/>
              </div>
              <div className="mb-3">
                <label className="form-label">Ratings</label>
                <input className="form-control bg-success-subtle" type='number' placeholder='Enter rating on a scale of 1 to 100..' ref={rateRef}/>
              </div>
              <div className="mb-3">
                <label  className="form-label">Duration</label>
                <input className="form-control bg-success-subtle" placeholder='Enter Duration in hrs or min (e.g., in the format 132m or 2.5h)...' ref={durRef}/>
              </div>
              <button type="submit" className="btn btn-success">Add Movie</button>
          </form>
      </div>
    )
}

export default MovieForm