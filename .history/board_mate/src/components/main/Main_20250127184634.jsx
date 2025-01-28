import { useState } from "react";
import Header2 from "./Header2";
import Sidebar from "./Sidebar";

const Main = () => {

        const [showInput, setShowInput] = useState(false);

        const handleShowInput = () => {
            setShowInput((prev) => !prev)
        }

    // const handleNewCard = () => {
    //     const [todos, setTodos] = useState([]);
    //     const [inputValue, setInputValue] = useState("")
    // }

    return ( 

        <>
        <Header2/>
        <Sidebar/>
        <div className="tasks">
            <div id="task">
                <input type="text" id="input_btn" placeholder="todo-task" />
                <ul>
                    <li><a href="#">Working  </a></li>
                </ul>
                <button onClick={handleShowInput} ><img src="symbol.svg" alt="Logo"/>{showInput && (
                    <input
                    type="text"
                    />
                )}
                <span> Add a card</span>
                </button>
            </div>
        </div>
        </>

     );
}
 
export default Main;