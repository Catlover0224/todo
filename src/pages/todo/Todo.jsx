import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { faPen, faTrash, faCheck, faX } from '@fortawesome/free-solid-svg-icons';
import S from './style';
import useInput from '../../hooks/useInput';

const Todo = ({ todo, isTodoUpdate, handleIsTodoUpdate }) => {
    const { id, title, content, userId, isChecked } = todo;
    const [value, onChange, setValue] = useInput(title);
    const [isEdit, setIsEdit] = useState(false);

    const handleIsEdit = () => {
        setIsEdit(!isEdit);
    }

    const hendleTodoDelete = () => {
        if (!window.confirm('정말로 삭제하시겠습니까?')) return;
        fetch(`http://localhost:4000/todo/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then((response) => {
            if (!response.ok) { // 상태 코드 확인
                throw new Error(`삭제 실패: ${response.status}`);
            }
            console.log("삭제 성공:", response);
            handleIsTodoUpdate(!isTodoUpdate);
        }).catch(console.error);
    }

    return (
        <S.Li>
            <S.Wrapper>
                <input type="checkbox" />
                {isEdit ? (
                    <input className='update-input' value={value} onChange={onChange} />
                ) : (
                    <S.Title>{title}</S.Title>
                )}
            </S.Wrapper>
            <S.Wrapper>
                {isEdit ?
                    (
                        <>
                            {/* 수정 */}
                            <S.Button>
                                <FontAwesomeIcon icon={faCheck} className='check' />
                            </S.Button>
                            {/* 취소 */}
                            <S.Button onClick={handleIsEdit}>
                                <FontAwesomeIcon icon={faX} className='exit' />
                            </S.Button>
                        </>
                    ) : (
                        <S.Button onClick={handleIsEdit}>
                            <FontAwesomeIcon icon={faPen} className='pen' />
                        </S.Button>
                    )}
                {/* 삭제 */}
                <S.Button onClick={hendleTodoDelete}>
                    <FontAwesomeIcon icon={faTrash} className='trash' />
                </S.Button>
            </S.Wrapper>
        </S.Li>
    );
};

export default Todo;