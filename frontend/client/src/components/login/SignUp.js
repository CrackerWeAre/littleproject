import React, { Component, useState,useEffect } from 'react'
import { connect } from 'react-redux'
import Tag from '../surveys/Tag'
import axios from 'axios'
import history from '../../history'
import {idCheck, signUp} from '../../actions/user'
import "../../style/css/Login.css";
import SignUpBasic from './SignUpBasic';
import SignUpSelection from './SignUpSelection';
import SignUpTag from './SignUpTag';
import bcrypt from 'bcrypt';

export const SignUp = (props) => {
    const [id,setId] = useState('');
    const [nick,setNick] = useState('');
    const [password,setPassword] = useState('');
    const [passwordCheck,setPasswordCheck] = useState('');
    const [hashpassword, setHashPassword] = useState('')
    const [year,setyear] = useState('2000');
    const [month,setmonth] = useState('01');
    const [day, setday] = useState('01');
    const [passwordError,setPasswordError] = useState(false);
    const [termError,setTermError] = useState(false);
    const [first,setfirst] = useState(true);
    const [second,setsecond] = useState(false);
    const [third, setthrid] =useState(true)
    const [cateitems, setcateitems] = useState([])
    const [tagitems, settagitems] = useState([])
    


    const onSubmit = (e) => {
        e.preventDefault();
        if(passwordError){
            alert("비밀번호가 서로 다릅니다.");
            setPasswordCheck('')
            return 
        }
        if(termError){
            alert("중복된 아이디가 있습니다.");
            setId('')
            return
        }

        if(first){
            setfirst(false)
            setsecond(true)
        }else if(second){
            setsecond(false)
            setthrid(true)
        }else if(third){
            setandsign(password, year, month, day);
        }
    };

    async function getPw(password, serial){
        await bcrypt.hash(password, serial, (err, hash)=>{
           setHashPassword(hash)
        })
     }

    const setandsign = (password, year, month, day) => {
        
        var birthday = year+"-"+month+"-"+day
        var serialNo = Math.floor(Math.random()*10000)
        getPw(password, serialNo)
        props.setsignUp({"id":id, "nickname":nick, "password":hashpassword, birthday, cateitems, tagitems, serialNo})
    }
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

    const onChangeYear = (e) => {
        setyear(e.target.value);
    };

    const onChangeMonth = (e) => {
        setmonth(e.target.value);
    };

    const onChangeDay = (e) => {
        setday(e.target.value);
    };

    async function getData(id) {
        const params = new URLSearchParams();
        params.append('userID',id); 
        const newResponse = await axios.post("https://mkoa.sparker.kr:1323/signUp/checkID", params)
        console.log(newResponse)
        if(newResponse.data.Status){
            if(newResponse.data.Status==="true"){
                setTermError(true)
            }else {
                setTermError(false)
            }
        }
      };

    const onfocusout = (e) => {
        getData(id)
    }
  



    return (
        <>
            {first&&
                <SignUpBasic 
                    onSubmit={onSubmit}
                    id={id} 
                    nick={nick} 
                    password={password} 
                    passwordCheck={passwordCheck} 
                    onChangeId={onChangeId} 
                    onChangeNick={onChangeNick}
                    onChangePassword={onChangePassword}
                    onChangePasswordChk={onChangePasswordChk}
                    passwordError={passwordError}
                    onfocusout={onfocusout}
                ></SignUpBasic>}
            {second&&<SignUpSelection
                    onSubmit={onSubmit}
                    onChangeYear={onChangeYear}
                    onChangeMonth={onChangeMonth}
                    onChangeDay={onChangeDay}
                ></SignUpSelection>}
            {third&&<SignUpTag
                    onSubmit={onSubmit}
                    setcateitems={setcateitems}
                    cateitems={cateitems}
                    tagitems={tagitems}
                    settagitems={settagitems}
                ></SignUpTag>}
        </>
            
    );
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    setidCheck: idCheck,
    setsignUp: signUp
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
