import React,{Component} from "react";

class Clock extends Component{
    cnt = 0;
    constructor(props) {
        super(props);
        this.state={
            date : new Date()
        };
        this.test={
            data : this.cnt
        };
    }


    componentDidMount() {
        this.timer = setInterval(
            () => this.tick(),1000
        );
    }
    componentWillUnmount() {
        clearInterval(this.timer);
    }
    tick(){
        this.setState({date : new Date()})
        this.test.data = this.cnt++;
    }
    render() {
        return (
            <div>
                Clock Component
                <h2> NOW TIME? </h2>
                <h1>{this.state.date.toLocaleTimeString()}</h1>
                <h3>{this.test.data}</h3>
            </div>
        );
    }
}

export {Clock}