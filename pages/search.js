import React from 'react'
import Movie from '../components/Movie'
import { useRouter } from 'next/router'
export default function Search() {

    const router = useRouter();
    console.log(router.query.search);
    const [searchTerm,setSearchTerm] = React.useState('');
    const [movie,setMovie] = React.useState(null);
    const SEARCH_URL="https://api.themoviedb.org/3/search/movie?api_key=dae81bdae797ded183ee269afd03a3c4&query=";
    const Feature_api = 'https://api.themoviedb.org/3/movie/popular?api_key=dae81bdae797ded183ee269afd03a3c4';

    const handleSearch = () => {
      //  e.preventDefault()
        if(router.query.search){
            getMovies(SEARCH_URL  +router.query.search)
            setSearchTerm('')
        }else if(!router.query.search){
            getMovies(Feature_api)
        }
        else if(router.query.search == ''){

        }
        else{
            getMovies(Feature_api)
        }
    }
    const getMovies = (api) => {
        fetch(api)
         .then((res)=>res.json())   
         .then((data)=>{
             setMovie(data.results)
         });
     }
     React.useEffect(() => {
        handleSearch();
     } ,[router.query.search]);

  return (
    <div className=''>
        {
            movie.length>0 ?     (<Movie movie={movie} />)
: 'No movie found'
        }
    </div>
  )
}
