import { Component } from "react";

export default class Arry extends Component{
    i=1;
    constructor(){
        super();//call Parent component constructor pls... 
        this.state={
            nums: [12,11,34,56,7,84,32]
        }
    }
    render(){
        return(
            <div>
                <h1>Array Elemnt</h1>
                {
                    this.state.nums.map((e)=>(
                        <li key={this.i++}>{e}</li>
                    ))
                }
                <br/>
                <button onClick={()=>(this.sortArry('ASC'))}>ASC</button>
                <button onClick={()=>(this.sortArry('DESC'))}>DESC</button>
            </div>
        );
    }
    sortArry(dirrection){
        let temp = [];
        switch(dirrection){
            case 'ASC':
                temp = this.state.nums.sort((a, b) => a - b)
                break;
            case 'DESC':
                temp = this.state.nums.sort((a, b) => b - a)
                break;
            default:
                break;
        }
        this.setState(
            {nums: temp}
        );
    }
}
//arrow (=>) function
/*
    (e)=>(
        {e}
    )
        --OR--
    e=>(
        {e}
    )
*/