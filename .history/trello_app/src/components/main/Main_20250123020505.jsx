import Header2 from "./Header2";
import Sidebar from "./Sidebar";

const Main = () => {
    return ( 

        <>
        <Header2/>
        <Sidebar/>
        <div className="tasks">
            <div id="task">
                <input type="text" id="input_btn" placeholder="todo-task" />
                <ul>
                    <li><a href="#">Working  <img src="symbol.svg" alt="Logo"/> </a></li>
                </ul>
                <button><img src="symbol.svg" alt="Logo"/><span> Add a card</span></button>
            </div>
        </div>
        </>

     );
}
 
export default Main;