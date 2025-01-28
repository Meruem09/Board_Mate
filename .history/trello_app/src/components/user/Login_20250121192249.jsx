import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";


const Login = () => {
    return ( 
        <Router>
            <Routes>
                <Route path='/' element={<SignedIn/>}></Route>
                
            </Routes>
        </Router>
     );
}
 
export default Login;