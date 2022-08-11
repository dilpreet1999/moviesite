import React,{useState,useEffect} from 'react'
import TvshowBox from './tvshowbox';
export default function Tvshow(props) {
   
  return (
    <div>
        <div className='movie-container'>
        {props.movie && props.movie.map((item,index)=>{
            return <TvshowBox key={index} data={item}/>
        }
        )}

        </div>
    </div>
  );
}

