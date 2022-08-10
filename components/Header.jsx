import React from 'react'
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function Header({ children }) {
  const router = useRouter();
  const SEARCH_URL="https://api.themoviedb.org/3/search/movie?api_key=dae81bdae797ded183ee269afd03a3c4&query=";
  const [movie,setMovie] = React.useState(null);
  const [searchTerm,setSearchTerm] = React.useState('')
  const Feature_api = 'https://api.themoviedb.org/3/movie/popular?api_key=dae81bdae797ded183ee269afd03a3c4';

 const handleSearch = (e) => {
   e.preventDefault()
  router.push({
    pathname: '/search',
    query: { search: searchTerm }
  })
 }
  return (
    <header>
      <form onSubmit={handleSearch}>
    <input type="text" placeholder="Search" onChange={(e)=>setSearchTerm(e.target.value)} className='search' />
    </form>
    </header>
  )
}
