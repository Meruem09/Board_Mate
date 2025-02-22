import { SignIn,SignUp, UserButton, useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

const Header2 = () => {

    const navigate_to = useNavigate()
    const { isSignedIn } = useUser()
    const handle_register = () =>{
        navigate_to('/register')
    }
    const handle_login = () =>{
        navigate_to('/login')
    }

    const handle_home = () => {
        navigate_to('/')
    }

    return ( 
        <div className="header2">

            <div className="logo">
                <img src="logo.svg" alt="Logo" />
            </div>

            <div className="title">
                Trello
            </div>

            <div className="links">
                <a className="home" onClick={handle_home}>Home</a>
                <a className="create_btn" >Create</a>
            </div>
            
            <div className="buttons">
                {isSignedIn ? (
                    <UserButton/>
                ) : (
                    <>
                    <button  onClick={handle_register} className="sign_up_btn">Sign up</button>
                    <button onClick={handle_login}  className="login_btn1">Login</button>
                    </>
                    
                )}
                
            </div>
            
            

        </div>
     );
}
 
export default Header2;