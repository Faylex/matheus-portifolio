import Image from 'next/image'
import Link from 'next/link';
import styles from '../styles/page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>
          Timeline
        </h1>
        </div>
        <div className={styles.menu}>
          <h1>Profile</h1>
          <h1>About Me</h1>
          <h1>Links</h1>
        </div>
    </main>
  )
}
