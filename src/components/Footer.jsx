import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer>
            <h2>Contact</h2>
                <div className={styles.footer}>
                {/* the "target=_blank" attribute make the link to open in a new tab */}
                <div className={styles.contact} id="contact">
                    <a href="https://github.com/NishanthTheRealOne" className={styles.socialLink} target="_blank" rel="noopener noreferrer">
                        <img src={require("../images/github-mark.png")} alt="github icon" className={styles.socialIcon} />
                    </a>
                    <a href="mailto:nsriniv37@gmail.com" className={styles.socialLink} target="_blank" rel="noopener noreferrer">
                        <img src={require("../images/icons8-gmail-48.png")} alt="gmail icon" className={styles.socialIcon} />
                    </a>
                    <a href="https://www.linkedin.com/in/nishanth-srinivassane-4083a6297/" className={styles.socialLink} target="_blank" rel="noopener noreferrer">
                        <img src={require("../images/icons8-linkedin-48.png")} alt="linkedin icon" className={styles.socialIcon} />
                    </a>
                    <a href={require("../data/CV_Srinivassane_Nishanth.pdf")} className={styles.socialLink} download="CV_Srinivassane_Nishanth.pdf" target="_blank" rel="noopener noreferrer">
                        <img src={require("../images/icons8-resume-48.png")} alt="cv icon" className={styles.socialIcon} />
                    </a>
                </div>
                <div className={styles.credits}>
                    <p>
                        Développé par Nishanth Srinivassane en React.js
                    </p>
                    <div className={styles.imagesCredits}>
                        <p>Crédits des images : <a target="_blank" rel="noopener noreferrer" href="https://icons8.com">Icons8</a></p>
                        
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;