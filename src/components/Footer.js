const Footer = () => {
    return (
        <footer className="bg-purple-600 text-white p-4 text-center">
            <div className="Contact" id="contact">
                <a href="https://github.com/NishanthTheRealOne">
                    <img src="/images/github-mark.png" alt="github icon" className="w-full h-full" />
                </a>
                <a href="mailto:nsriniv37@gmail.com">
                    <img src="/images/icons8-gmail-48.png" alt="gmail icon" className="w-full h-full" />
                </a>
                <a href="https://www.linkedin.com/in/nishanth-srinivassane-4083a6297/">
                    <img src="/images/icons8-linkedin-48.png" alt="linkedin icon" className="w-full h-full" />
                </a>
            </div>
            <div className="text-sm mt-4">
                <p>Crédits des images</p>
                <a target="_blank" href="https://icons8.com/icon/P7UIlhbpWzZm/gmail">Gmail</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
                <a target="_blank" href="https://icons8.com/icon/13930/linkedin">LinkedIn</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
            </div>
        </footer>
    );
};

export default Footer;