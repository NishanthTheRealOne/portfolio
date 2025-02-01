const Header = () => {
    return (
        <header className="bg-purple-600 text-white p-4">
            <nav className="flex justify-between">
                <div className="space-x-4">
                    <a href='#introduction'>Introduction</a>
                    <a href='#projects'>Projets</a>
                    <a href='#contact'>Contact</a>
                </div>
            </nav>
        </header>
    );
};

export default Header;