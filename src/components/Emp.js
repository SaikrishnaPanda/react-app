import { Component } from "react";

export default class Emp extends Component{
    constructor(){
        super();
        this.state={
            employee:[]
        }
    }
    componentDidMount(){
        let e1={
            id: 1,
            name: 'Harry Potter',
            salary: '85000',
            city: 'london'
        };
        let e2={
            id: 2,
            name: 'Ronald Weasley',
            salary: '75000',
            city: 'kent'
        };
        let e3={
            id: 3,
            name: 'hermione Granger',
            salary: '95000',
            city: 'london'
        };
        let temp = [e1,e2,e3];
        this.setState(
            {employee: temp}
        )
    }
    render(){
        return(
            <div>
                <h3>Employee List</h3>
                {
                    this.state.employee.map((e)=>(
                        <div key={e.id}>
                            ID:{e.id} <br />
                            Name: {e.name} <br />
                            Salary:{e.salary} <br />
                            City: {e.city} <br />
                        </div>
                    ))
                }
            </div>
        )
    }
}