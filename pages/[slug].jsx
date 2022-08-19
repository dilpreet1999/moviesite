import React,{useEffect,useState} from 'react';
import {useRouter} from 'next/router';
import Image from 'next/image';

export default function MovieSingle({ movie }) {
  const router = useRouter();
  const {slug}  = router.query;
  // console.log(slug);
  //   useEffect(()=>{
  //     getData();
  //     window.scroll(0,0);
      
  //   },[]);
  
  //   const getData = async () => {
  //     const res = await fetch(`https://api.themoviedb.org/3/movie/${slug}?api_key=dae81bdae797ded183ee269afd03a3c4&language=en-US`);
  //     const data = await res.json();
  //     setMovie(data);
  //   }
  return (
    

    // 

    <div className="movie-single">
            <div className="movie__intro">
                <img className="movie__backdrop" src={`https://image.tmdb.org/t/p/w500/${ movie && movie.backdrop_path}`} alt={`dd`} />
            </div>
             <div className="movie__detail">
                <div className="movie__detailLeft">
                    <div className="movie__posterBox">
                        <img className="movie__poster" src={`https://image.tmdb.org/t/p/w500/${movie ? movie.poster_path : ""}`} />
                    </div>
                </div>
                <div className="movie__detailRight">
                    <div className="movie__detailRightTop">
                        <div className="movie__name">{movie ? movie.original_title : ""}</div>
                        <div className="movie__tagline">{movie ? movie.tagline : ""}</div>
                        <div className="movie__rating">
                            {movie ? movie.vote_average: ""} <i class="fas fa-star" />
                            <span className="movie__voteCount">{movie ? "(" + movie.vote_count + ") votes" : ""}</span>
                        </div>  
                        <div className="movie__runtime">{movie ? movie.runtime + " mins" : ""}</div>
                        <div className="movie__releaseDate">{movie ? "Release date: " + movie.release_date : ""}</div>
                        <div className="movie__genres">
                            {
                                movie && movie.genres
                                ? 
                                movie.genres.map(genre => (
                                    <><span className="movie__genre" id={genre.id}>{genre.name}</span></>
                                )) 
                                : 
                                ""
                            }
                        </div>
                    </div>
                    <div className="movie__detailRightBottom">
                        <div className="synopsisText">Synopsis</div>
                        <div>{movie ? movie.overview : ""}</div>
                    </div>
                    
                </div>
            </div>
            <div className="movie__links">
                <div className="movie__heading">Useful Links</div>
                {
                    movie && movie.homepage && <a href={movie.homepage} target="_blank" style={{textDecoration: "none",paddingLeft:"10px"}}><p><span className="movie__homeButton movie__Button">Website <i className="newTab fas fa-external-link-alt"></i></span></p></a>
                }
                {
                    movie && movie.imdb_id && <a href={"https://www.imdb.com/title/" + movie.imdb_id} target="_blank" style={{textDecoration: "none"}}><p><span className="movie__imdbButton movie__Button">IMDb<i className="newTab fas fa-external-link-alt"></i></span></p></a>
                }
            </div>
            <div className="movie__heading">Production companies</div>
            <div className="movie__production">
                {
                    movie && movie.production_companies && movie.production_companies.map(company => (
                        <>
                            {
                                company.logo_path 
                                && 
                                <span className="productionCompanyImage">
                                    <Image className="movie__productionComapany" src={"https://image.tmdb.org/t/p/original" + company.logo_path} width={100} height={100} />
                                    <span>{company.name}</span>
                                </span>
                            }
                        </>
                    ))
                }
            </div> 
        </div>
  )
}


  
  export async function getServerSideProps(context) {
    //  const router = useRouter();
    // const {slug}  = router.query;
    const response = await fetch(`https://api.themoviedb.org/3/movie/${context.params.slug}?api_key=dae81bdae797ded183ee269afd03a3c4&language=en-US`);
    const body = await response.json();
    console.log(body);
   // const  results  = body.results;
    return {
      props: {
        movie: body,
        // fallback: blocking
      }
    };
  }