import React, { useState } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import {idCheck, signUp} from '../../actions/user'
import "../../style/css/Login.css";
import SignUpBasic from './SignUpBasic';
import bcrypt from 'bcryptjs';

export const SignUp = (props) => {
    const [id,setId] = useState('');
    const [nick,setNick] = useState('');
    const [password,setPassword] = useState('');
    const [passwordCheck,setPasswordCheck] = useState('');
    const [hashpassword, setHashPassword] = useState('')
    const [serialNo, setSerailNo] = useState('')
    const [year,setyear] = useState('2000');
    const [month,setmonth] = useState('01');
    const [day, setday] = useState('01');
    const [passwordError,setPasswordError] = useState(false);
    const [termError,setTermError] = useState(false);
    const [first,setfirst] = useState(true);
    const [gender, setgender] = useState('men')
    


    const onSubmit = (e) => {
        e.preventDefault();
        if(passwordError){
            alert("비밀번호가 서로 다릅니다.");
            setPasswordCheck('')
            setPasswordError(false)
            return 
        }
        if(termError){
            alert("중복된 아이디가 있습니다.");
            setId('')
            setTermError(false)
            return
        }
        setandsign(year, month, day)
        

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
    
    async function getPw(password, serial){

        await bcrypt.genSalt(serial, (err, salt) => {
            bcrypt.hash(password, salt, (err, hash) => {
                setSerailNo(salt)
                setHashPassword(hash)
                // Now we can store the password hash in db.
            });
        });
    }

    const setandsign = (year, month, day) => {
        
        var birthday = year+"-"+month+"-"+day
        
        props.setsignUp({"id":id, "nickname":nick, "password":hashpassword, birthday, serialNo, gender})
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
        if(e.target.value === password){
            setPasswordError(e.target.value === password);
            const serial = Math.floor(Math.random()*10);
            setSerailNo(serial)
            getPw(password, serial)
        }else{
            setPasswordError(e.target.value !== password);
        }
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

    const onChangeGender = (e) => {
        setgender(e.target.value)
    }

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
                    onChangeYear={onChangeYear}
                    onChangeMonth={onChangeMonth}
                    onChangeDay={onChangeDay}
                    onChangeGender={onChangeGender}
                ></SignUpBasic>}
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
