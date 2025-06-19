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
            <div>
                <img src={require("../images/logo.png")} alt='Logo' className={styles.logoImage} />
            </div>
            <nav className={styles.nav}>
                <div>
                    <a href='#introduction' className={styles.navLink} onClick={handleClick}>Introduction</a>
                    <a href='#projects' className={styles.navLink} onClick={handleClick}>Projets</a>
                    <a href='#experience' className={styles.navLink} onClick={handleClick}>Expérience</a>
                    <a href='#contact' className={styles.navLink} onClick={handleClick}>Contact</a>
                </div>
            </nav>
            <div className={styles.dawnContainer}>
                <img 
                    src={require("../images/dawn.png")} 
                    alt="Aube" 
                    className={styles.dawn}
                />
                <span className={styles.explainImg}>Nishanth signifie "très tôt le matin" en Tamil</span>
            </div>    
            
        </header>
    );
};

export default Header;