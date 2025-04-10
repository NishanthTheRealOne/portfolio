import styles from './Header.module.css';

const Header = () => {
    const handleClick = (e) => {
        e.preventDefault();

        const targetId = e.target.getAttribute('href').slice(1);

        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    };

    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <div>
                    <a href='#introduction' className={styles.navLink} onClick={handleClick}>Introduction</a>
                    <a href='#projects' className={styles.navLink} onClick={handleClick}>Projets</a>
                    <a href='#contact' className={styles.navLink} onClick={handleClick}>Contact</a>
                </div>
            </nav>
        </header>
    );
};

export default Header;