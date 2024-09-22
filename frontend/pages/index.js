import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

const HomePage = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>NGO for Improving Education</h1>
            <p className={styles.paragraph}>We work with schools in low-income districts to help students learn new skills and subjects.</p>
            <Image
                src="/background.jpg"
                alt="NGO Background"
                layout="fill"
                objectFit="cover"
                className={styles.background}
            />
            {/* Wrap the button with Link */}
            <Link href="/schools" passHref>
                <button className={styles.button}>See Schools</button>
            </Link>
        </div>
    );
};

export default HomePage;
