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
                    Organize Your Chaos
                    Like a Top Dog
                </div>
                <div className="sub_head">
                    Turning your messy to-do lisy into a vibe check.
                    Boards, lists & cards that make productivity 10x
                </div>
            </div>
       </div>
     );
}
 
export default Home;