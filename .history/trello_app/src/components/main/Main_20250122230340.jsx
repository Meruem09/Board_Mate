import Header2 from "./Header2";
import Sidebar from "./Sidebar";

const Main = () => {
    return ( 

        <>
        <Header2/>
        <Sidebar/>
        <div className="tasks">
            <div id="task">
                <input type="text" id="input_btn" />
                <ul>
                    <li><a href="">Working</a></li>
                </ul>
                <button>Add a card</button>
            </div>
        </div>
        </>
     );
}
 
export default Main;