import Image from 'next/image'
import Link from 'next/link';
import styles from '@Matheus/styles/page.module.css'
import Menu from '@Matheus/components/menu.component';
import Timeline from '@Matheus/components/timeline.component';
import Post from '@Matheus/components/post.component';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <Timeline />
      </div>
      <div className={styles.container}>
        <Menu />
      </div>
      <div className={styles.post}>
        <Post />
      </div>
    </main>
  )
}
