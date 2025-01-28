import Header from "./Header";

const Home = () => {
    return ( 
        <>
        <div className="navbar">
                <Header/>
            </div>
        <div className="content">
            
            <div className="title">
                Trello
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
       </>
     );
}
 
export default Home;