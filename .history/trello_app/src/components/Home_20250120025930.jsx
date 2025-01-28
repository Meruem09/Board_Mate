import Header from "./Header";

const Home = () => {
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
            
                <div className="head1">
                    <p>Organize Your Chaos</p>
                    <p>Like a Top Dog</p>
                </div>
                <div className="sub_head">
                    <p>Turning your messy to-do list into a vibe check</p>
                        <p>making productivity 10x</p>
                </div>

                <button>Get Started</button>
                <button>Login</button>
            </div>
       </div>
     );
}
 
export default Home;