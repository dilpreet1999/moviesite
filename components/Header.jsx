import React,{useState} from 'react'
import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from 'next/link'
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
 const [navbar, setNavbar] = useState(false);

  return (
    <>
     {/* <header> */}
     <nav className="w-full bg-slate-900	 shadow-lg">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <a href="javascript:void(0)">
                            <h2 className="text-2xl font-bold">LOGO</h2>
                        </a>
                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                            navbar ? "block" : "hidden"
                        }`}
                    >
                        <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                            <li className="text-gray-600 hover:text-blue-600">
                                <Link href={`/`}>
                                <a >Home</a>
                                </Link>
                            </li>
                            <li className="text-gray-600 hover:text-blue-600">
                                <Link href={`/trending-movies`}>
                                <a >Trending Movies</a>
                                </Link>
                            </li>
                            <li className="text-gray-600 hover:text-blue-600">
                                <Link href={`/tv-show`}>
                                <a>Trending Tv Show</a>
                                </Link>
                            </li>
                            <li className="text-gray-600 hover:text-blue-600">
                                <a href="javascript:void(0)">Contact US</a>
                            </li>
                            <form onSubmit={handleSearch}>

                            <div className="flex space-x-1">
                <input
                    type="text"
                    className="block w-full px-4 py-2 text-grey-700 bg-transparent border rounded-full focus:border-grey-900 focus:ring-grey-500 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Search..."
                    onChange={(e)=>setSearchTerm(e.target.value)}
                />
                <button type='submit' className="px-4 text-white bg-grey-600 rounded-full ">
                
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                </button>
            </div>
            </form>

                        </ul>
                  
                    </div>
                </div>
            </div>
        </nav>
</>

  );
}


