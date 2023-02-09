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
            </div>
        )
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