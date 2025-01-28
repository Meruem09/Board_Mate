import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";


const Login = () => {
    return ( 
        <Router>
            
                <Route path='/' element={<SignedIn/>}></Route>
                
            
        </Router>
     );
}
 
export default Login;