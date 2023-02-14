import axios from "axios";
import { Component } from "react";
import { connect } from "react-redux";
import {listTodo} from '../store/action/todo';

export class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listTodo:[]
        };
    }
    componentDidMount() {
        //call the api : but now call from the action
        this.props.listTodo();
        console.log("this.props.todoList: ", this.props.todoList);
    }
    // async getTodos() {
    //     try {
    //         const response = axios.get('https://jsonplaceholder.typicode.com/todos');
    //         const data = (await response).data;
    //         this.setState({
    //             todos: data,
    //         });
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }

    // render() {
    //     return (
    //         <div>
    //             <h1>Todo List</h1>
    //             <div class="row row-cols-1 row-cols-md-3 g-4">
    //                 {
    //                     this.state.todos.map((t) => (
    //                         <div class="col" key={t.id}>
    //                                 <div class="card h-100">
    //                             <div class="card text-bg-secondary mb-3">
    //                                     <h5 class="card-title">ID:{t.id}</h5>
    //                                     <div class="card-body">
    //                                         <h5 class="card-title">Work ToDO</h5>
    //                                         <p class="card-text">{t.title}</p>
    //                                     </div>
    //                                     <div class="card-footer">
    //                                         <small class="text-muted">Completed : {t.completed ? 'true' : 'false'}</small>
    //                                     </div>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                     ))
    //                 }
    //             </div>
    //         </div>
    //     )
    // }
    render(){
        return(
            <div>
                <h1>All Todos coming from the Store</h1>
                 {
                    this.props.todoList && this.props.todoList.list ? 
                    this.props.todoList.list.map((t,index)=>(
                        <div>
                            <li key={index}>{t.title}</li>
                        </div>
                    ))
                    :
                    <div>No todos available</div>
                 }
            </div>
        )
    }
};
function mapStateToProps(state){
    return{
        todoList: state.listTodo
        
    }
}


export default connect(mapStateToProps,{listTodo})(Todo)