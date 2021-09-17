import React, {Component} from "react";


class PhoneFormat extends Component{
    state = {
        userInfo:[
            {
                age : 0,
                name: '이름을 입력해주세요',
                phoneNum: '010-0000-0000',
                gender:'Male',
                flag:false
            }

        ]

    }

    updateState = (e)=> {
        console.log(e.target);
        console.log(e.target.type);
        console.log(e.target.value);
        this.setState({
            [e.target.name] : e.target.value
        });
    }


    render() {
        const a = [1,2,3,4,5];
        const b = a.map(t => t * 2);

        console.log(a);
        console.log(a.slice(0,2).concat(a.slice(3,4)));
        console.log(a.filter(x=> x>1&&x<5));
        console.log(this.state.age);
        console.log(this.state.name);
        console.log(this.state.phoneNum);
        console.log(this.state.gender);
        console.log(this.state.flag);
        return(
            <div>
                <span>TEST~!</span>
                <div>
                    <input type="text" name="name" placeholder={this.state.name} onChange={this.updateState}/>
                    <input type="text" name="phoneNum" onChange={this.updateState}/>
                    <label htmlFor="male"><input type="radio" name="gender" id="male" value="male" onChange={this.updateState}/>남성</label>
                    <label htmlFor="female"><input type="radio" name="gender" id="female" value="female" onChange={this.updateState}/>여성</label>
                    <input type="text" placeholder={this.state.age} name="age" onChange={this.updateState}/>
                </div>
                <div>
                    <button >변형</button>
                </div>
            </div>
        );
    }
}

export {PhoneFormat}