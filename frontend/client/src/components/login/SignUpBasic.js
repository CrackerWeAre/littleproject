import React from 'react'

function SignUpBasic(data) {
    return (
        <div className="account">
            <div className="account__form">
                <form onSubmit={data.onSubmit} method="post">
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
                            value={data.id} 
                            required 
                            onChange={data.onChangeId}
                            onBlur={data.onfocusout}
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
                            value={data.nick} 
                            required 
                            onChange={data.onChangeNick}
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
                            value={data.password} 
                            required 
                            onChange={data.onChangePassword}
                            />
                        </div>
                        </div>
                        <div className="account__field">
                            <label htmlFor="username" className="hidden"></label>
                            <div className="form__input">
                                <input
                                type="password"
                                id="passwordcheck"
                                placeholder="비밀번호를 재입력해주세요"
                                value={data.passwordCheck} 
                                required 
                                onChange={data.onChangePasswordChk}
                                />
                            </div>
                        </div>
                        
                        <div className="account__button">
                            <button
                            type="submit"
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

export default SignUpBasic
