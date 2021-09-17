import React from "react";
import "./TodoListTemplate.css";

const TodoListTemplate = ({form,children,color})=>{
    console.log(form)
    console.log(children)
    console.log(color)
    console.log(color.length)
    return(
        <main className="todoListTemplate">
            <div className="title" style={color.length < 1?null : {backgroundColor:color}}>
                오늘의 할일
            </div>
            <section className="formWrapper">
                {form}
            </section>
            <section className="todoWrapper">
                {children}
            </section>
        </main>
    );
}

export default TodoListTemplate;