import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function MovieBox({ data }) {
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
        <span>{data.vote_average}</span>

        </div>
      </div>
    </>
  )
}
