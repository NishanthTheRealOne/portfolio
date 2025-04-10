import styles from './Introduction.module.css';

export const Introduction = () => {
    return (
        <div className={styles.container} id="introduction">
            <div className={styles.orvLogoContainer}>
                <img src={require("../images/orvLogo.jpg")} alt="Logo ORV" className={styles.orvLogo} />
            </div>
            <h1 className={styles.heading}>Qui suis-je ?</h1>
            <div className={styles.contentWrapper}>
                <div className={styles.imageContainer}>
                    <img
                        src={require('../images/portrait.jpg')}
                        alt="Nishanth Srinivassane"
                        className={styles.image}
                    />
                </div>
                <p className={styles.description}>
                    Moi c'est Nishanth Srinivassane, étudiant en Informatique et bienvenue
                    sur mon site web.
                    Vous trouverez, ici, mes projets et un aperçu de mes compétences et de ce
                    que j'aime faire.
                    Spécialisé dans le développement web et logiciel, je cherche à élargir mes
                    compétences et je suis toujours à la recherche de nouveautés.
                    Bonne exploration de mon site web !
                </p>
            </div>
        </div>
    );
};

export default Introduction;