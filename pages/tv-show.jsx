import React,{useState,useEffect} from 'react';
import Tvshow from '../components/tvShow';

export default function Trending() {
    const Tvshow_url = "https://api.themoviedb.org/3/trending/tv/week?api_key=dae81bdae797ded183ee269afd03a3c4";
    const [movie, setMovie] = useState(null);
    useEffect(() => {
     getMovies(Tvshow_url);
    },[]);
    const getMovies = (api) => {
       fetch(api)
        .then((res)=>res.json())   
        .then((data)=>{
            setMovie(data.results)
        });
    }
  return (
    <div className=''>
    <Tvshow movie={movie} />
    </div>
  )
}
