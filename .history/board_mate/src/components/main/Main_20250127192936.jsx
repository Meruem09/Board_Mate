import { useState } from "react";
import Header2 from "./Header2";
import Sidebar from "./Sidebar";

const Main = () => {

    const [showInput, setShowInput] = useState(false);
    const [inputValue, setInputValue] = useState(false);
    const [todos, setTodos] = useState([]);
    
    const handleAddCard = () => {
        if(inputValue.trim()){
            setTodos([...todos,inputValue])
            setInputValue("")
        }
        setShowInput(false)
    }
    


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
                    {todos.map((todo, index) => (
                        <li key={index}>
                            <a href="">{todo}</a>
                        </li>
                    ))}
                </ul>
                <button onClick={handleShowInput} ><img src="symbol.svg" alt="Logo"/>
                <span> Add a card</span>
                </button>
                {showInput && (
                    <div>
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                    <button onClick={handleAddCard}><img src="tick.svg" alt="logo" /></button>
                    </div>
                )}
            </div>
        </div>
        </>

     );
}
 
export default Main;