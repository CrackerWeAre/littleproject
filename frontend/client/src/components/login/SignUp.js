import React, { Component, useState,useEffect } from 'react'
import { connect } from 'react-redux'
import Tag from '../surveys/Tag'
import "../../style/css/Login.css";

export const SignUp = () => {
    const [id,setId] = useState('');
    const [nick,setNick] = useState('');
    const [password,setPassword] = useState('');
    const [passwordCheck,setPasswordCheck] = useState('');
    const [term,setTerm] = useState(false);
    const [passwordError,setPasswordError] = useState(false);
    const [termError,setTermError] = useState(false);
    const [first,setfirst] = useState(true);
    const [second,setsecond] = useState(true);
    const [cateitems, setcateitems] = useState([])
    const [tagitems, settagitems] = useState([])

    const onSubmit = (e) => {
        e.preventDefault();
        if(password !== passwordCheck){
            return setPasswordError(true);
        }
        if(!term){
            return setTermError(true);
        }
        console.log({
            id,
            nick,
            password,
            passwordCheck,
            term
        });
        setfirst(false)
        setsecond(true)
    };

    const onChangeId = (e) => {
        setId(e.target.value);
    };
    const onChangeNick = (e) => {
        setNick(e.target.value);
    };
    const onChangePassword = (e) => {
        setPassword(e.target.value);
    };
    const onChangePasswordChk = (e) => {
        setPasswordError(e.target.value !== password);
        setPasswordCheck(e.target.value);
    };
    const onChangeTerm = (e) => {
        setTermError(false);
        setTerm(e.target.checked);
    }

    const SignFirst = () => {
        return (
            <div className="account">
            <div className="account__form">
                <form onSubmit={onSubmit}>
                    <div className="box">
                        <div className="account__head">
                        <h2>회원가입</h2>
                        </div>
                        <div className="account__field">
                        <label htmlFor="username" className="hidden"></label>
                        <div className="form__input">
                            <input
                            type="email"
                            id="username"
                            placeholder="이메일을 입력해주세요"
                            value={id} 
                            required 
                            onChange={onChangeId}
                            />
                        </div>
                        </div>
                        <div className="account__field">
                        <label htmlFor="username" className="hidden"></label>
                        <div className="form__input">
                            <input
                            type="text"
                            id="nickname"
                            placeholder="닉네임을 입력해주세요"
                            value={nick} 
                            required 
                            onChange={onChangeNick}
                            />
                        </div>
                        </div>
                        <div className="account__field">
                        <label htmlFor="username" className="hidden"></label>
                        <div className="form__input">
                            <input
                            type="password"
                            id="password"
                            placeholder="비밀번호를 입력해주세요"
                            value={password} 
                            required 
                            onChange={onChangePassword}
                            />
                        </div>
                        </div>
                        <div className="account__field">
                            <label htmlFor="username" className="hidden"></label>
                            <div className="form__input">
                                <input
                                type="password"
                                id="password"
                                placeholder="비밀번호를 재입력해주세요"
                                value={passwordCheck} 
                                required 
                                onChange={onChangePasswordChk}
                                />
                            </div>
                        </div>
                        <div className="account__button">
                            <button
                            type="button"
                            className="btn btn__block btn__gradient--primary"
                            >
                            <strong>가입하기</strong>
                            </button>
                        </div>
                        <div className="account__field">
                            <div className="form__text">
                                <label htmlFor="username" className="hidden">가입하면 SPARKER의 약관, 데이터 정책 및 쿠키 정책에 동의하게 됩니다.</label>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        )
    }

    const SignSecond = () => {
        return (
        <div className="account">
            <div className="account__form">
                <form onSubmit={onSubmit}>
                    <div className="box">
                        <div className="account__head">
                        <h2>추가정보 등록</h2>
                        </div>
                        <div className="account__field">
                            <label htmlFor="username" className="hidden">생일추가</label>
                            <div className="form__input">
                            
                                <select name="user_birth_year">
                                    <option value="2000" defaultValue>2000</option>
                                    <option value="2001" >2001</option>
                                    <option value="2002" >2002</option>
                                    <option value="2003" >2003</option>
                                    <option value="2004" >2004</option>
                                </select>
                                <select name="user_birth_month">
                                    <option value="1" defaultValue>1월</option>
                                    <option value="2">2월</option>
                                    <option value="3">3월</option>
                                    <option value="4">4월</option>
                                    <option value="5">5월</option>
                                    <option value="6">6월</option>
                                    <option value="7">7월</option>
                                    <option value="8">8월</option>
                                    <option value="9">9월</option>
                                    <option value="10">10월</option>
                                    <option value="11">11월</option>
                                    <option value="12">12월</option>
                                </select>
                                <select name="user_birth_day">
                                    <option value="1" defaultValue>1일</option>
                                    <option value="2">2일</option>
                                    <option value="3">3일</option>
                                    <option value="4">4일</option>
                                    <option value="5">5일</option>
                                    <option value="6">6일</option>
                                    <option value="7">7일</option>
                                    <option value="8">8일</option>
                                    <option value="9">9일</option>
                                    <option value="10">10일</option>
                                    <option value="11">11일</option>
                                    <option value="12">12일</option>
                                    <option value="13">13일</option>
                                    <option value="14">14일</option>
                                    <option value="15">15일</option>
                                    <option value="16">16일</option>
                                    <option value="17">17일</option>
                                    <option value="18">18일</option>
                                    <option value="19">19일</option>
                                    <option value="20">20일</option>
                                    <option value="21">21일</option>
                                    <option value="22">22일</option>
                                    <option value="23">23일</option>
                                    <option value="24">24일</option>
                                    <option value="25">25일</option>
                                    <option value="26">26일</option>
                                    <option value="27">27일</option>
                                    <option value="28">28일</option>
                                    <option value="29">29일</option>
                                    <option value="30">30일</option>
                                    <option value="31">31일</option>
                                </select>
                            </div>
                        </div>
                        <div className="account__field">
                    <div className="form__text">
                        <label htmlFor="username" className="hidden">태어난 날짜를 입력해야 합니다.</label>
                    </div>
                </div>
                <div className="account__button">
                    <button
                    type="button"
                    className="btn btn__block btn__gradient--primary"
                    >
                    <strong>제출하기</strong>
                    </button>
                </div>
                    </div>
                </form>

                
         
            </div>
        </div>
        )
    }

    const SignThird = () => {
        
        const addClick = (data) => {
            setcateitems([...cateitems, data])
            console.log(cateitems)
        }

        const subClick = (data) => {
            setcateitems(cateitems.filter(item => item !== data))
            console.log(cateitems)
        }

        const addItemClick = (data) => {
            settagitems([...tagitems, data])
            console.log(tagitems)
        }

        const subItemClick = (data) => {
            settagitems(tagitems.filter(item => item !== data))
            console.log(tagitems)
        }

        const submitClick = () => {
            console.log(cateitems)
            console.log(tagitems)
        }
        
        const items = (Data) => {

            return Data.map(item => {
                    return <Tag key={item} data={item} addClick={addClick} subClick={subClick}></Tag>
                }
                
            )
        }
        const dataset = {"game":["리그오브레전드","하스스톤","스타크래프트"],"channel":["풍월량", "얍얍", "대도서관"],"공중파":["예능","드라마","실시간뉴스"]}
        
        const itemlist = (cateitems) => {
            console.log(cateitems, "hello")
            return cateitems.map(category => {
                if(dataset[category]){
                    
                    return dataset[category].map(item => {
                        console.log(item)
                        return <Tag key={item} data={item} addClick={addItemClick} subClick={subItemClick}></Tag>
                    })
                }
            })
        }



        return (
            <>
            <div className="account">
                <div className="account__form">
                    <form onSubmit={onSubmit}>
                        <div className="box">
                            <div className="account__head">
                            <h2>라이브 선택</h2>
                            </div>
                            <div className="account__field">
                                <label htmlFor="username" className="hidden">태그 선택</label>
                            </div>
                            <div className="account__field">
                                {items(["game","channel","공중파"])}
                                {itemlist(cateitems)}
                                <button
                                type="button"
                                className="btn btn__block btn__gradient--primary"
                                onClick={submitClick}
                                >
                                <strong>제출</strong>
                                </button>

                            </div>
                        </div>
                    </form>
                </div>
            </div>
                
            </>
        )
    }

    return (
        <>
            {first&&SignFirst()}
            {second&&SignSecond()}
            {SignThird()}
        </>
            
    );
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
