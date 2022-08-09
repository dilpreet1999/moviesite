import React,{useState,useEffect} from 'react'
import MovieBox from './MovieBox';

export default function Movie({title,poster_path,overview,release_date,vote_average,id}) {
    const [movie, setMovie] = useState(null);
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=dae81bdae797ded183ee269afd03a3c4`)
        .then((res)=>res.json())   
        .then((data)=>{
            setMovie(data.results)
        });
    },[]);
  return (
    <div>Movie
        <div className='movie-container'>
        {movie && movie.map((item,index)=>{
            return <MovieBox key={index} data={item}/>
        }
        )}
        </div>
    </div>
  );
}

