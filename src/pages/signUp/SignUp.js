import React from 'react';
import S from './style';
import BasicInput from '../../components/input/BasicInput';
import BasicButton from '../../components/button/BasicButton';
import { useForm } from 'react-hook-form'

const SignUp = () => {

    // 이메일 양식 @, . 이메일 주소를 포함한 패턴을 지켜야 합니다.
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    // 소문자, 숫자, 특수문자를 각 하나 포함한 8자리 이상이여야 합니다.
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[!@#])[\da-zA-Z!@#]{8,}$/;

    const { register, handleSubmit, getValues, formState: { isSubmitting, isSubmitted, errors } } = useForm({mode : "onChange"});



    return (
        <S.Form>
            <S.Label>
                <S.Title>이메일</S.Title>
                <BasicInput
                    size={"full"} shape={"small"} variant={"gray"} color={"black"}
                    id="email" type="text" placeholder="이메일"
                />
            </S.Label>
            <S.Label>
                <S.Title>비밀번호</S.Title>
                <BasicInput
                    size={"full"} shape={"small"} variant={"gray"} color={"black"}
                    id="password" type="password" placeholder="비밀번호"
                />
            </S.Label>
            <S.Label>
                <S.Title>비밀번호 확인</S.Title>
                <BasicInput
                    size={"full"} shape={"small"} variant={"gray"} color={"black"}
                    id="passwordConfirm" type="password" placeholder="비밀번호 확인"
                />
            </S.Label>

            <BasicButton size={'full'} shape={'small'} variant={'black'} color={'white'}>회원가입</BasicButton>
        </S.Form>
    );
};

export default SignUp;