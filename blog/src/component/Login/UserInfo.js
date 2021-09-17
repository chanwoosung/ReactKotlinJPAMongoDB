import React from "react";

const UserInfo =({id,name,gender})=>{
    return(
        <div>
            <p>USER ID : {id}</p>
            <p>USER NAME : {name}</p>
            <p>USER Gender : {gender}</p>
        </div>
    );
}

export default UserInfo;