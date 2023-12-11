import React from 'react'


const Login = () => {
    return (
        <div className="login__wrap">
            <h2>LOGIN</h2>
            <form>
                <div>
                    <label htmlFor="youId">아이디</label>
                    <input
                        type="text"
                        id="youId"
                        name="youId"
                        autoComplete='off'
                        required
                    />
                </div>
                <div>
                    <label htmlFor="youPass">비밀번호</label>
                    <input
                        type="password"
                        id="youPass"
                        name="youPass"
                        autoComplete="off"
                        required
                    />
                </div>
                <div>
                    <button type="submit" className="btn_style2 mt30">로그인</button>
                </div>
            </form>
        </div >
    )
}

export default Login