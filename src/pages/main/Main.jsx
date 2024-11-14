import React from 'react';
import { Link } from 'react-router-dom';
import S from '../layout/style';
import BasicButton from '../../components/button/BasicButton';

const Main = () => {
    console.log("🚀 ~ Main ~ process.env.PUBLTC_URL:", process.env.PUBLTC_URL);

    return (
        <S.Wrapper>
            <div className='imageWrapper'>
                <img src={process.env.PUBLIC_URL + "/images/main/penguin.png.png"} alt="cat"></img>
            </div>

            <div className='buttonWrapper'>
                <Link to={'/signIn'}>
                    <BasicButton>로그인</BasicButton>
                </Link>
                <Link to={'/signUp'}>
                    <BasicButton>회원가입</BasicButton>
                </Link>
            </div>
        </S.Wrapper>
    );
};

export default Main;