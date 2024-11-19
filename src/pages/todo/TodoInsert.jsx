import React from 'react';
import useInput from '../../hooks/useInput';
import S from './style';

const TodoInsert = ({isTodoUpdate, handleIsTodoUpdate}) => {
    const [value, onChange, setValue] = useInput("");

    const onKeyPressAddTodo = (e) => {
        if (e.key === 'Enter') {
            if (!window.confirm("이대로 추가 하시겠습니까?")) return;
            fetch(`http://localhost:4000/todo`, {
                method: 'POST',
                header: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title: value,
                    isChecked: false,
                })
            }).then((response) => {
                handleIsTodoUpdate(!isTodoUpdate);
                setValue("");
            }).catch(console.error);
        }
    }

    return (
        <div>
            <S.Input value={value} onChange={onChange} placeholder='할 일을 추가하실랍니까?' onKeyUp={onKeyPressAddTodo} />
        </div>
    );
};

export default TodoInsert;