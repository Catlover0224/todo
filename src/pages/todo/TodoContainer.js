import React, { useEffect, useState } from "react";
import Todo from "./Todo";
import TodoInsert from "./TodoInsert";

const TodoContainer = () => {
    // http://localhost:4000/todo로 투두를 요청하여 console.log에 출력하기
    // 단 useState로 데이터를 넣고, 넣은 데이터를 출력한다.
    // 모든 비동기 요청은 사이드이팩트가 발생할 수 있다.

    const [todoList, setTodoList] = useState([]);
    const [isTodoUpdate, setIsTodoUpdate] = useState(false);

    const handleIsTodoUpdate = () => {
        setIsTodoUpdate(!isTodoUpdate);
    }

    const getTodoList = async () => {
        try {
            const response = await fetch(`http://localhost:4000/todo`);
            const data = await response.json();
            return data;
        } catch (error) {
            console.log("🚀 ~ getTodoList ~ error:", error);
        }
    }

    useEffect(() => {
        getTodoList().then(setTodoList);
    }, [isTodoUpdate]);

    return (
        <div>
            <TodoInsert isTodoUpdate={isTodoUpdate} handleIsTodoUpdate={handleIsTodoUpdate} />
            <p className="subTitle">남은 할일 : <span>{todoList && todoList.length}</span></p>
            <ul>
                {todoList && todoList.map((todo, i) => (
                    <Todo isTodoUpdate={isTodoUpdate} handleIsTodoUpdate={handleIsTodoUpdate} todo={todo} key={i} />
                ))}
            </ul>
        </div>
    );
};

export default TodoContainer;
