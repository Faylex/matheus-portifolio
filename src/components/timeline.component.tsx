import Link from 'next/link';
import styles from '@Matheus/styles/page.module.css'

export default function Timeline() {
    return(
        <div className={styles.menu}>
            <div>
                <h1><Link href="/">Timeline</Link></h1>
            </div>
        </div>
    )

}