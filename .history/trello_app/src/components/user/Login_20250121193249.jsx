import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { SignedIn, SignedOut, SignIn, SignInButton, UserButton } from "@clerk/clerk-react";


const Login = () => {
    return ( 

        <>
        <center><SignIn/></center>
            
        </>
        
     );
}
 
export default Login;