import axios from "axios";
import { Component } from "react";

export default class Todo extends Component {
    constructor() {
        super();
        this.state = {
            todos: []
        };
    }
    componentDidMount() {
        this.getTodos();
    }
    async getTodos() {
        try {
            const response = axios.get('https://jsonplaceholder.typicode.com/todos');
            const data = (await response).data;
            this.setState({
                todos: data,
            });
        } catch (error) {
            console.error(error);
        }
    }

    render() {
        return (
            <div>
                <h1>Todo List</h1>
                <div class="row row-cols-1 row-cols-md-3 g-4">
                    {
                        this.state.todos.map((t) => (
                            <div class="col" key={t.id}>
                                    <div class="card h-100">
                                <div class="card text-bg-secondary mb-3">
                                        <h5 class="card-title">ID:{t.id}</h5>
                                        <div class="card-body">
                                            <h5 class="card-title">Work ToDO</h5>
                                            <p class="card-text">{t.title}</p>
                                        </div>
                                        <div class="card-footer">
                                            <small class="text-muted">Completed : {t.completed ? 'true' : 'false'}</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}