import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { SignedIn, SignedOut, SignIn, SignInButton, UserButton } from "@clerk/clerk-react";


const Login = () => {
    return ( 

        <div className='sign_in_container'>
        <SignIn/>
        </div>
        
     );
}
 
export default Login;