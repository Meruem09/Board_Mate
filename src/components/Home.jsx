import Header from "./Header";
import {motion} from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const navigate = useNavigate();

    const handle_get_started = () =>{
        navigate('/main')
    }


    return ( 
        <div className="content">
            <div className="navbar">
                <Header/>
            </div>
            <div className="text_content">
                <div className="title1">
                    <div className="logo">
                        <img src="logo.svg" alt="Logo" />
                    </div>
                    <div className="title_name">
                        Trello
                    </div>
                </div>
            
                <motion.div
                initial={{opacity:0,y:50}}
                animate={{opacity:1,y:0}}
                transition={{duration:1.1,ease:'easeInOut'}}
                
                className="head1">
                    <p>Organize Your Chaos</p>
                    <p>Like a Top Dog</p>
                </motion.div>
                <motion.div className="sub_head"
                initial={{opacity:0,y:50}}
                animate={{opacity:1,y:0}}
                transition={{duration:1.1,ease:'easeInOut'}}
                
                >
                    <p>Turning your messy to-do list into a vibe check</p>
                        <p>making productivity 10x</p>
                </motion.div>
                <div className="buttons">
                    <button onClick={handle_get_started} >Get Started</button>
                    <button className="login_btn" onClick={handle_get_started} >Login</button>
                </div>
            </div>
       </div>
     );
}
 
export default Home;