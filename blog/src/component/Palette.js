import React,{Component} from "react";
import {ColorBoard} from "./ColorBoard";

class Palette extends Component{
    state = {
        colors:[
            {id:0,color:'#343a40'},
            {id:1,color:'#f03e3e'},
            {id:2,color:'#12b886'},
            {id:3,color:'#228ae6'}
        ],
        colorBoard:{
            selected:0,
        }
    }

    handleOnClick=(id)=>{
        const {colorBoard,colors} = this.state;
        const {onChange} = this.props
        // if(id !== colorBoard[0].selected) {
        //     this.setState({
        //         colorBoard: colorBoard.concat({
        //             selected: id
        //         }).filter(a=>a.selected === id)
        //     })
        //     console.log(colorBoard[0])
        // }
        // const {selected} = colorBoard.selected;
        //
        // this.setState(({selected:selected}));
        console.log(colors[id]);
        console.log(colors[id].color);
        // const obj=Object.assign(colorBoard,{selected:id});
        // console.log(obj)
        onChange(colors[id].color);
        this.setState(({colorBoard})=>({
            // return Object.assign(colorBoard, {selected: id})
            colorBoard : Object.assign(colorBoard, {selected: id})
            // console.log(colorBoard)
            })
        );
        // this.setState({
        //     colorBoard: obj
        // })

    }

    render() {
        const {handleOnClick}=this;
        const {colors,colorBoard} = this.state;
        console.log(colorBoard.selected)
       // console.log(colorBoard[0].selected);
        const colorList = colors.map(
            ({id,color})=>(
                <ColorBoard
                    onClick={handleOnClick}
                    color={color}
                    key={id}
                    id={id}
                    style={this.state.colorBoard}
                />
            )

        )
        console.log(colorList);
        return (
            <div>
                {colorList}
            </div>
        );
    }
}


export {Palette};