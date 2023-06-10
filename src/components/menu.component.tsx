import Link from 'next/link';
import Image from 'next/image';
import styles from '@Matheus/styles/page.module.css'
import profilePic from '@Matheus/app/statics/images/profile.jpg'


export default function Menu() {
    return(
        <div className={styles.menu}>
            <Image className={styles.image}
                src={profilePic}
                width={250}
                height={250}
                alt="Picture of the author"
                />
            <div className={styles.about}><h2><Link href="/about">About</Link></h2></div>
        </div>
    )

}