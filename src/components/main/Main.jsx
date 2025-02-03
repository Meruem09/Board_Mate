import { useRef, useState } from "react";
import Header2 from "./Header2";
import Sidebar from "./Sidebar";
import { SortableContext, verticalListSortingStrategy, useSortable, arrayMove } from '@dnd-kit/sortable';
import { DndContext, closestCorners } from "@dnd-kit/core";
import { CSS } from '@dnd-kit/utilities';

const Main = () => {
    const [boards, setBoards] = useState([1]);
    const [showInput, setShowInput] = useState({});
    const [inputValues, setInputValues] = useState({});
    const [todos, setTodos] = useState({}); // ✅ Store todos as an object per board


    const addBoards = () => {
        const newBoardId = boards.length + 1;
        setBoards([...boards, newBoardId]);
        setShowInput(prev => ({ ...prev, [newBoardId]: false }));
        setInputValues(prev => ({ ...prev, [newBoardId]: "" }));
        setTodos(prev => ({ ...prev, [newBoardId]: [] })); // ✅ Initialize todos for the new board
    };

    const handleAddCard = (boardId) => {
        if (inputValues[boardId]?.trim()) {
            const newTodo = { id: Date.now(), text: inputValues[boardId] }; // Use a unique ID
            setTodos(prev => ({
                ...prev,
                [boardId]: [...(prev[boardId] || []), newTodo], // ✅ Add the new todo to the specific board
            }));
            setInputValues(prev => ({ ...prev, [boardId]: "" })); // ✅ Clear the input for this board
        }
        
        setShowInput(prev => ({ ...prev, [boardId]: false })); // ✅ Hide the input for this board
    };

    const handleShowInput = (boardId) => {
        setShowInput(prev => ({ ...prev, [boardId]: !prev[boardId] }));
    };

    const handleDragEnd = (event, boardId) => {
        const { active, over } = event;
        if (!active || !over || active.id === over.id) return; // ✅ Prevent unnecessary updates

        setTodos(prev => {
            const boardTodos = prev[boardId] || [];
            const originalPos = boardTodos.findIndex(task => task.id === active.id);
            const newPos = boardTodos.findIndex(task => task.id === over.id);

            if (originalPos === -1 || newPos === -1) return prev; // ✅ Avoid errors if indexes are invalid

            const updatedTodos = arrayMove(boardTodos, originalPos, newPos);
            return { ...prev, [boardId]: updatedTodos }; // ✅ Update only the dragged board
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
                {boards.map((boardId) => (
                    <DndContext key={boardId} onDragEnd={(e) => handleDragEnd(e, boardId)} collisionDetection={closestCorners}>
                        <div className="task">
                            <input type="text" id="input_btn" placeholder="todo-task" />
                            
                            {/* ✅ FIX: Only render <ul> if tasks exist */}
                            {todos[boardId]?.length > 0 && (
                                <ul>
                                    <SortableContext items={todos[boardId].map(todo => todo.id)} strategy={verticalListSortingStrategy}>
                                        {todos[boardId].map((todo) => (
                                            <SortableItem key={todo.id} id={todo.id} text={todo.text} />
                                        ))}
                                    </SortableContext>
                                </ul>
                            )}

                            <button onClick={() => handleShowInput(boardId)}>
                                <img src="symbol.svg" alt="Logo" />
                                <span> Add a card</span>
                            </button>

                            {/* ✅ FIX: Input only appears in the selected board */}
                            {showInput[boardId] && (
                                <div style={{ marginTop: "0px" }}>
                                    <input
                                        id="addCardInput"
                                        type="text"
                                        value={inputValues[boardId] || ""}
                                        onChange={(e) => setInputValues(prev => ({ ...prev, [boardId]: e.target.value }))}
                                    />
                                    <button onClick={() => handleAddCard(boardId)}>
                                        <img src="tick.svg" alt="logo" />
                                    </button>
                                </div>
                            )}
                        </div>
                    </DndContext>
                ))}
                <div id="newBoard">
                    <button id="newBoardBtn" onClick={addBoards}>
                        Create new board
                    </button>
                </div>
            </div>
        </>
    );
};

export default Main;
