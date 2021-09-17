import React, {Component} from "react";
import "./TodoItem.css";

class TodoItem extends Component {


    render() {
        const {text, checked, id, onToggle, onRemove} = this.props;
        console.log(id);
        return (
            <div className="todoItem" onClick={()=>onToggle(id)}>
                <div className="remove" onClick={(e)=>{
                    e.stopPropagation(); // onToggle이 실행되지 않게 함
                    onRemove(id)
                }}>
                    &times;
                </div>
                <div className={`todoText ${checked && 'checked'}`}>
                    <div>{text}</div>
                </div>
                {
                    checked && (<div className="checkMark">✓</div>)
                }
            </div>
        );
    };
}
export  {TodoItem};

