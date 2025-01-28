import { useState } from "react";
import Header2 from "./Header2";
import Sidebar from "./Sidebar";
import { SortableContext, verticalListSortingStrategy, useSortable, arrayMove } from '@dnd-kit/sortable';
import { DndContext, closestCorners } from "@dnd-kit/core";
import { CSS } from '@dnd-kit/utilities';

const Main = () => {
    const [boards, setBoards] = useState([1])
    const [showInput, setShowInput] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const [todos, setTodos] = useState([]);

    const addBoards = () => {
        setBoards([...boards, boards.length + 1]);
    }

    const handleAddCard = () => {
        if (inputValue.trim()) {
            setTodos([...todos, { id: todos.length + 1, text: inputValue }]);
            setInputValue("");
        }
        setShowInput(false);
    };

    const handleShowInput = () => {
        setShowInput((prev) => !prev);
    };

    const HandleDragEnd = (event) => {
        const { active, over } = event;
        if (active.id === over.id) return;

        setTodos((todos) => {
            const originalPos = todos.findIndex(task => task.id === active.id);
            const newPos = todos.findIndex(task => task.id === over.id);

            return arrayMove(todos, originalPos, newPos);
        });
    };

    const SortableItem = ({ id, text }) => {
        const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

        const style = {
            transform: CSS.Transform.toString(transform),
            transition,
        };

        return (
            <li ref={setNodeRef} style={style} {...attributes} {...listeners}>
                <a href="#">{text}</a>
            </li>
        );
    };

    return (
        <>
            <Header2 />
            <Sidebar />
            <div className="tasks">
                <DndContext onDragEnd={HandleDragEnd} collisionDetection={closestCorners}>
                    <div id="task">
                        <input type="text" id="input_btn" placeholder="todo-task" />
                        <ul>
                            <SortableContext items={todos.map(todo => todo.id)} strategy={verticalListSortingStrategy}>
                                {todos.map((todo) => (
                                    <SortableItem key={todo.id} id={todo.id} text={todo.text} />
                                ))}
                            </SortableContext>
                        </ul>
                        <button onClick={handleShowInput}>
                            <img src="symbol.svg" alt="Logo" />
                            <span> Add a card</span>
                        </button>
                        {showInput && (
                            <div>
                                <input
                                    className="addCardInput"
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                />
                                <button onClick={handleAddCard}><img src="tick.svg" alt="logo" /></button>
                            </div>
                        )}
                    </div>
                    <div id="newBoard">
                        <button>
                            Create new board
                        </button>
                    </div>
                </DndContext>
            </div>
        </>
    );
};

export default Main;