import Header2 from "./Header2";
import Sidebar from "./Sidebar";

const Main = () => {
    return ( 

        <>
        <Header2/>
        <Sidebar/>
        <div className="tasks">
            <div id="task">
                <input type="text" placeholder="to-do task" />
                <ul id=""> Workout </ul>
                <input type="text" name="" id="add_card" placeholder="Add a card" />
            </div>
        </div>
        </>
     );
}
 
export default Main;