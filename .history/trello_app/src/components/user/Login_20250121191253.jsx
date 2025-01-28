import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";


const Login = () => {
    return ( 
        <Router>
            <Routes>
                <Route path='/' element={<SignedIn/>}></Route>
                <Route path='/' element={<SignedUp/>}></Route>
                <Route path='/' element={""}></Route>
                <Route path='/' element={<Dashboard/>}></Route>
            </Routes>
        </Router>
     );
}
 
export default Login;