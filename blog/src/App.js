import logo from './logo.svg';
import './App.css';
//import {Clock} from "./component/Clock";
// import {Toggle} from "./component/Toggle";
import {Component} from "react";
//import {Counter} from "./component/Counter"
//import {PhoneFormat} from "./component/phoneFormat";
import {Map,List} from "immutable";
import TodoListTemplate from "./component/TodoListTemplate";
import LoginBoxTemplate from "./component/Login/LoginBoxTemplate";
import LoginInput from "./component/Login/LoginInput";
import UserInfo from "./component/Login/UserInfo";
import Form from "./component/Form";
import {TodoItemList} from "./component/TodoItemList";
import {Palette} from "./component/Palette";

class App extends Component{
    id=3
    state= {
        input:'',
        todos:[
            {id:0, text: ' 리액트 테스트', checked:false},
            {id:1, text: ' 리액트 테스트', checked:true},
            {id:2, text: ' 리액트 테스트', checked:false}
        ],
        userInfo:{id: '', name: '', gender: '',pw:''},
        selectedColor:'',
        submitFlag:false
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log(nextState.userInfo)
        console.log(this.state.userInfo)
        if(this.state.userInfo !== nextState.userInfo){
            if(this.state.submitFlag) {
                return true;
            } else {
                return false;
            }
        } else {
            return true;
        }

    }

    handleChange = (e) => {
        this.setState({
            input : e.target.value
        })
    }

    typeInfo = (e) => {
        const infoName = e.target.name;
        const info = e.target.value;
        console.log(infoName);
        console.log(info);
        this.setState(({userInfo})=>({
                userInfo:Object.assign(userInfo,{[infoName]:info})
            })
        )
    }

    handleCreate =() =>{
        const {input, todos} = this.state;
        this.setState({
           input : '',
           todos: todos.concat({
              id:this.id++,
              text: input,
              checked: false
           })
        });
    }

    handleKeyPress = (e) =>{
        // if(e.key === 'Enter'){
        //     this.handleCreate();
        // }
    }

    handleToggle = (id) =>{
        const {todos} = this.state;
        const index = todos.findIndex(a => a.id ===id);
        const selected = todos[index];
        const nextTodos = [...todos];

        nextTodos[index] = {
            ...selected,
            checked: !selected.checked
        };

        this.setState({
            todos: nextTodos
        })
    }

    handleRemove = (id) =>{
        const {todos} =this.state;
        this.setState({
            todos: todos.filter(a =>a.id !== id)
        })
    }
    changeColor = (color) =>{
        console.log("uploaded==> " + color);
        this.setState({
            selectedColor : color
        });
    }
    submitLogin = ()=>{
        console.log('clicked!');
    }

    render() {

        const {input,todos,selectedColor} = this.state;
        const{
            handleChange,
            handleCreate,
            handleKeyPress,
            handleToggle,
            handleRemove,
            changeColor,
            submitLogin,
            typeInfo
        } = this;
        console.log(this.state.userInfo)
        return (
            <div className="App">
                <body>
                    <LoginBoxTemplate loginInput={(
                        <LoginInput onClick={submitLogin} onChange={typeInfo}/>
                    )} userInfo={(<UserInfo/>)}/>
                    <TodoListTemplate form={(
                        <Form value={input} onKeyPress={handleKeyPress} onChange={handleChange} onCreate={handleCreate}/>
                    )} color={selectedColor}> 템플릿
                        <TodoItemList todos={todos} onToggle={handleToggle} onRemove={handleRemove}/>
                    </TodoListTemplate>
                    <Palette onChange={changeColor}/>
                </body>
            </div>
        );
    }
}

export default App;
