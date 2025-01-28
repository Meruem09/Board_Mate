
const Header = () => {
    return ( 
        <header>
            <div className="logo">
                <img src="logo.svg" alt="Logo" />
            </div>
            <div className="title">
                Trello
            </div>
            <div className="links">
                <a  to='#'>Home</a>
                <a to='#'>Manga</a>
                <a to='#'>Promo</a>
                <a to='#'>Design</a>
            </div>

            <button className="sign_up_btn">Sign up</button>
            <button className="login_btn1">Login</button>

        </header>
     );
}
 
export default Header;