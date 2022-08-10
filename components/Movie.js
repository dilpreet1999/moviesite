import React,{useState,useEffect} from 'react'
import MovieBox from './MovieBox';

export default function Movie(props) {
   
  return (
    <div>
        <div className='movie-container'>
        {props.movie && props.movie.map((item,index)=>{
            return <MovieBox key={index} data={item}/>
        }
        )}

        </div>
    </div>
  );
}

