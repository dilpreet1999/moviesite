import React,{useState,useEffect} from 'react';
import Movie from '../components/Movie'


export default function Trending() {
    const Trending_url = "https://api.themoviedb.org/3/trending/movie/day?api_key=dae81bdae797ded183ee269afd03a3c4";
    const [movie, setMovie] = useState(null);
    useEffect(() => {
     getMovies(Trending_url);
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
    <Movie movie={movie} />
    </div>
  )
}
