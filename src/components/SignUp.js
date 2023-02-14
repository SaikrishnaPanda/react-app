import axios from "axios";
import { Component } from "react";

export default class SignUp extends Component{
    constructor(){
        super();
        this.state = {
            user: {
                name:'',
                email:'',
                password:''
            },
            errors :{},
            msg:''     
        }
    }
    componentDidMount(){}

    render(){
        return(
            <div>
                <section>
                <div>
                <h1>Sign Up</h1>
                <span style={{color:'red'}}>{this.state.msg}</span> <br />
                <label>Enter the name:</label>
                <input type="text"
                        name="name"
                        value={this.state.user.name}
                        onChange={this.changeHandler}></input>
                <span style={{color:'red'}}>{this.state.errors['name']}</span>
                <br /> <br />
                <label>Enter email:</label>
                <input type="text"
                        name="email"
                        value={this.state.user.email}
                        onChange={this.changeHandler}></input>
                <span style={{color:'red'}}>{this.state.errors['email']}</span>
                <br /> <br />
                <label>Enter password:</label>
                <input type="password"
                        name="password"
                        value={this.state.user.password}
                        onChange={this.changeHandler}></input>
                <span style={{color:'red'}}>{this.state.errors['password']}</span>
                <br /> <br />
                <button onClick={this.onSignUp}>SignUp</button>
            </div>
                </section>
            </div>
        )
    }
    changeHandler =(event)=>{
        this.setState(
            {user:{
                ...this.state.user,
                [event.target.name] : event.target.value
            }}
        );
    }
    onSignUp = ()=>{
        console.log(this.state.user)
        /* Validate User inputs */
        if(this.handleValidation()){
            console.log(this.state.user);
            /* Call the API */
            this.postUser(this.state.user);
        }
        else{
            /* Display error messages */
            console.log('validation not passed..');
        }
    }

    handleValidation(){
        let name = this.state.user.name;
        let email = this.state.user.email; 
        let password = this.state.user.password; 
        let tempErrors={}
        let formValid = true; 
        if(!name){ //If name is not given
            formValid = false;
            tempErrors['name']='Name cannot be empty';
        }
        if(!email){ //If email is not given
            formValid = false;
            tempErrors['email']='Email cannot be empty';
        }
        if(!password){ //If password is not given
            formValid = false;
            tempErrors['password']='Password cannot be empty';
        }

        this.setState({
            errors: tempErrors
        });
        return formValid;
    } 
    async postUser(person){
        try {
            const response = axios.post("http://localhost:8080/person/add", person);
            const data = (await response).data;
            console.log('API success');
            console.log(data);
          } catch (error) {
            console.error(error.response.data.msg);
            this.setState({
                msg: error.response.data.msg
            })
          }
    }   
}