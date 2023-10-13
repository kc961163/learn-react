import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Gallery from './components/gallery.js'
import Profile from './qcomps/profile_mistake.js'
import Part2 from './qcomps/firstcomp.js'

export default function Home() {
  return (
    <div className={styles.main}>
        <Part2 />
    </div>
  )
}
