
const Header = () => {

    const navigate = useNavigate();

    const handle_get_started = () =>{
        navigate('/login')
    }
 
    const handle_get_signUp = () =>{
        navigate('./signup')
    }




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
            <div className="buttons">
                <button onClick={handle_get_started} className="sign_up_btn">Sign up</button>
                <button onClick={handle_get_started} className="login_btn1">Login</button>
            </div>

        </header>
     );
}
 
export default Header;