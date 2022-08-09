import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Movie from '../components/Movie'
import Header from '../components/Header'

export default function Home() {
  return (
    <>
    <div className='root'>
   <Header >
    <input type="text" placeholder="Search" className='search' />
    </Header>
    <Movie />
    </div>
   </>
  )
}
