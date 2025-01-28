import { useNavigate } from "react-router-dom";
const Header = () => {


    const handle_register = () =>{
        useNavigate('/signUp')
    }
    const handle_login = () =>{
        useNavigate('/login')
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
                <button  onClick={handle_register} className="sign_up_btn">Sign up</button>
                <button onClick={handle_login}  className="login_btn1">Login</button>
            </div>

        </header>
     );
}
 
export default Header;