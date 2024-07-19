import { useState, useEffect } from 'react';
import { IonIcon } from '@ionic/react';
import { closeOutline } from 'ionicons/icons';


const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isHeaderSticky, setIsHeaderSticky] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 20) {
                setIsHeaderSticky(true);
            } else {
                setIsHeaderSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener in component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`header ${isHeaderSticky ? 'active' : ''}`} data-header>
            <div className="container">

                <div className={`overlay ${isMenuOpen ? 'active' : ''}`} data-overlay onClick={handleMenuToggle}></div>

                <nav className={`navbar ${isMenuOpen ? 'active' : ''}`} data-navbar>
                    <button className="menu-close-btn" data-menu-close-btn onClick={handleMenuToggle}>
                        <IonIcon icon={closeOutline} />
                    </button>

                    <ul className="navbar-list">
                        <li>
                            <a href="/" className="navbar-link">Home</a>
                        </li>

                        <li>
                            <a href="/aboutproject" className="navbar-link">About</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header
