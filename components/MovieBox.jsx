import React from 'react'
import Image from 'next/image'

export default function MovieBox({ data }) {
  return (
    <>
      <div className="movie">
        <div className="movie-image">
          <Image
            src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
            width={300}
            height={300}
          />
        </div>
        <div className='movie-detail'>
        <h5>{data.title}</h5>
        <span>{data.vote_average}</span>

        </div>
      </div>
    </>
  )
}
