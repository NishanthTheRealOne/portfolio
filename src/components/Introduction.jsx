import styles from './Introduction.module.css';

export const Introduction = () => {
    return (
        <div className={styles.container} id="introduction">
            <h1 className={styles.heading}>Qui suis-je ?</h1>
            <div className={styles.contentWrapper}>
                <div className={styles.leftContent}>
                    <span className={styles.arrowText}>C'est moi</span>
                    <span className={styles.arrow}>→</span>
                </div>
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