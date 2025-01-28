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
                    <p>Turning your messy to-do lisy into a vibe check.</p>
                    <p>Boards, lists & cards that make </p>
                        <p>productivity 10x</p>
                </div>
            </div>
       </div>
     );
}
 
export default Home;