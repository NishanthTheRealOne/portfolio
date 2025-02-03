import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <div>
                    <a href='#introduction' className={styles.navLink}>Introduction</a>
                    <a href='#projects' className={styles.navLink}>Projets</a>
                    <a href='#contact' className={styles.navLink}>Contact</a>
                </div>
            </nav>
        </header>
    );
};

export default Header;