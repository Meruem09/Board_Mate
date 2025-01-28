import {Link} from 'react-router-dom'

const Header = () => {
    return ( 
        <header>
            <div className="logo">
                <img src="./assets/logo.svg" alt="Logo" />
            </div>
            <div className="title">
                Trello
            </div>
            <div className="links">
                <Link  to='#'>Home</Link>
                <Link to='#'>Manga</Link>
                <Link to='#'>Promo</Link>
                <Link to='#'>Design</Link>
            </div>

        </header>
     );
}
 
export default Header;