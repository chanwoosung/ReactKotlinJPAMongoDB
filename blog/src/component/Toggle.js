import React,{Component} from "react";
import App from "../App";

class Toggle extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn:true,
            Subject:{title:'testReact',sub:'subject!'},
            number:0,
            count:0,
            testName:"NULL"
        }
        this.changeState = this.changeState.bind(this);
        this.ReHI = this.ReHI.bind(this);
        this.returnCount = this.returnCount.bind(this);
        this.showCount = this.showCount.bind(this);
    }

    onTest=()=>{
        this.setState({
            testName:"TESTER"
        });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
    }


    changeState(msg) {
        console.log(msg);
        console.log(this.state.isToggleOn);
        console.log(this.state.number);
        //if(this.state.isToggleOn)this.state.isToggleOn=false;
        if(this.state.isToggleOn){
            console.log(this.state.isToggleOn);
            this.setState({number: this.state.number+1,isToggleOn:false});
            console.log(this.state.number);
        }
        this.setState((state)=>{
           return {count:state.count+1};
        });
        console.log(this.state.count);
        //this.state.number++;
        //console.log(this.state.number);

    }
    returnCount(){
        if(this.props.flag){
            this.setState({count:this.state.count+1});
        }else{
            this.setState({testName:this.props.name});
        }

        console.log("work~?");
    }
    showCount(){
        console.log(this.state.count);
        console.log(this.props);
    }
    render() {
        console.log(this.state.testName);
        console.log(this.state.isToggleOn);
        console.log(this.state.count);
        console.log(this.props);
        console.log(this);
        const name = this.props.name;
        return (
            <div style={{width:'50em'}}>
                <div onClick={()=>this.changeState("write this!")}> Say GoodBye~! {this.state.Subject.title} ~ {this.state.Subject.sub} is {this.state.isToggleOn}</div>
                <div onClick={this.ReHI}>REHI~?</div>
                <div onClick={this.onTest}>ONTEST!?</div>
                <div onClick={this.returnCount}><p>return COUNT!{YourName({name})}</p></div>
            </div>
        );
    }
    ReHI(){
        console.log("clicked")

        return (
            <div>oh! welcome good to see you</div>
        );
    }
}

const YourName = ({name})=>{
    return (<div>네 이름이 {name} 맞지?</div>);
}

Toggle.calledData = {
    date : new Date()
}
Toggle.defaultProps = {
    name : 'tester is me'
}


function ReHI (props){
    console.log(props);
    return (
        <div>oh! {Toggle.calledData.date} welcome good to see you {Toggle.defaultProps.name}</div>
    );
}


export {Toggle}