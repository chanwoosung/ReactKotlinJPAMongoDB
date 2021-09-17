import React from "react";

const LoginInput=({onClick,onChange})=>{
    return(
        <div>
            <div className="fl">
                <div>
                    <input type="text" placeholder="ID를 입력해주세요" onChange={onChange} name="id"/>
                </div>
                <div>
                    <input type="password" name="pw" onChange={onChange}/>
                </div>
            </div>
            <div>
                <button className="createButton fr" onClick={onClick}>로그인</button>
            </div>
        </div>
    );
}

export default LoginInput;