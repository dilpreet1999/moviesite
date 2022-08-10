import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function MovieBox({ data }) {
  const setVote = (vote) => {
    if (vote >= 7) {
      return 'green'
    } else if (vote >= 4) {
      return 'blue'
    } else {
      return 'red'
    }
  }
  return (
    <>
      <div className="movie">
        <div className="movie-image">
          <Image
            src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
            className="movie-image"
            width={300}
            height={300}
            alt={data.title}
          />
        </div>
        <div className='movie-detail'>
        <h5>
          <Link href={`/${data.id}`}>
         <a> {data.title}</a></Link>
         </h5>
        <span className={`tag ${setVote(data.vote_average)}`}>{data.vote_average}</span>

        </div>
      </div>
    </>
  )
}
