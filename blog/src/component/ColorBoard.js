import React, {Component} from "react";
import "./ColorBoard.css";

class ColorBoard extends Component{
    render() {
        const {color,onClick,id} = this.props;
        return(
            <div className="ColorBoard" style={{backgroundColor:color}} onClick={(e)=>{
                console.log(e.target.id);
                onClick(id)
            }} id={id}>{color}</div>
        );
    }
}

export {ColorBoard};