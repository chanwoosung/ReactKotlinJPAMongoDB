import React from "react";
import "./LoginBox.css";

const LoginBoxTemplate = ({loginInput,userInfo})=>{
    return(
        <div className="LoginBox">
            <div style={{width:"100%",height:"25%"}}>
                {loginInput}
            </div>
            <div className="UserInfoBox">
                {userInfo}
            </div>
        </div>
    );
}

export default LoginBoxTemplate;