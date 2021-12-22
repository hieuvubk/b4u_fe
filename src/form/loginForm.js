import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import formData from './formData';


const LoginForm = () => {

    const {dataLoginForm} = formData();

    const [showPw, setShowPw] = useState({
        pw: true,
    });

    const shPw = (e) => {
        if(e.target.id === "lockpw"){
            setShowPw({
                ...showPw,
                pw: !showPw.pw,
            });
        }
        if(showPw.pw) {
            document.getElementById("pw").type = "text";
            document.getElementById("input-group__icon-lockpw").classList.add("show-pw")
        } else {
            document.getElementById("pw").type = "password";
            document.getElementById("input-group__icon-lockpw").classList.remove("show-pw")
        }
    }

    const renderForm = () => {
        let length = dataLoginForm[0].data.length;
        let arrRight = [], arrLeft = [];
        dataLoginForm[0].data.map((cur, index) => {
            let input =(
                <div className="input-group">
                    <label className="input-group__label">{cur.name}</label>
                    <div className="input-group-input width-235vw">
                        {
                            cur.required 
                                ? <input type="email" name='email' placeholder={cur.placeholder} required/>
                                : cur.type==="password"
                                ? <input type="password" placeholder="Mật khẩu" name='password' id="pw" required/>
                                : <input type="email" name='email' placeholder={cur.placeholder}/>
                        }
                        {
                            cur.type==="password"
                                ?   (
                                        <span className="input-group__icon" id="input-group__icon-lockpw">
                                            <i className="fas fa-lock" id="lockpw" onClick={shPw} ></i>
                                        </span>
                                    )
                                : null
                        }
                    </div>
                </div>
            );
            if (index < length / 2) {
                arrLeft.push(input);
              } else {
                arrRight.push(input);
              }

        })
        const showForm = (
            <div className="is-flex__col input-wraper">
                <div className="c-6">{arrLeft}</div>
                <div className="c-6">{arrRight}</div>
            </div>
        );
        return showForm
    }

    return ( 
        <>
            <div className="register">
                <div className="background"></div>
                <form className="signUpForm">
                    <div className="acount">
                        <form action="" autocomplete="off">
                            <div className="form-title__wrapper">
                                <h3 className="acount__title">Đăng Nhập</h3>
                            </div>
                            <div className="acount-body">
                                {
                                    renderForm()
                                }
                                <button type="submit" className="acount-body__button" >Đăng nhập</button>
                            </div>
                        </form>
                        <div className="acount-footer">
                            <div className="acount-sign-up">
                                Bạn chưa có tài khoản?
                                <Link to="/register" style={{textDecoration:'none'}}>
                                    <span className="sign-up" style={{cursor: 'pointer'}}> Đăng ký</span> 
                                </Link>     
                            </div>
                        </div>
                    </div>
                </form>                              
            </div>
        </>
    )
}

export default LoginForm
