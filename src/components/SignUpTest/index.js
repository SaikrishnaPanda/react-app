import axios from "axios";
import { Component } from "react";
import "./style.css";

export default class SignUpTest extends Component{

    constructor(props){
        super(props);
        this.state = {
            user: {
                userName:'',
                emailId:'',
                userrole:'',
                password:''
              },
            errors:{},
            msg:""
        }
    }

    componentDidMount(){}

  render() {
    return (
      <section className="vh-100 gradient-custom">
        <div className="container py-5 h-100">
          <div className="row justify-content-center align-items-center h-100">
            <div className="col-12 col-lg-9 col-xl-7">
              <div className="card shadow-2-strong card-registration mystyle" >
                <div className="card-body p-4 p-md-5">
                  <h3 className="mb-2 pb-2 pb-md-0 mb-md-5">Registration Form</h3>
                  <form>
                    <div className="row">
                      <div className="col-md-6 mb-2">
                        <div className="form-outline">
                          <label className="form-label" htmlFor="firstName">Your Name</label>
                          <input type="text" id="firstName" name="userName" value={this.state.user.userName} onChange={this.changeHandler} className="form-control form-control-lg" />
                          <span style={{color:'red'}}>{this.state.errors['name']}</span>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 mb-2 pb-2">
                        <div className="form-outline">
                          <label className="form-label" htmlFor="emailAddress">Email</label>
                          <input type="email" id="emailAddress" name="emailId" value={this.state.user.emailId} onChange={this.changeHandler} className="form-control form-control-lg" />
                          <span style={{color:'red'}}>{this.state.errors['email']}</span>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 mb-2 pb-2">
                        <div className="form-outline">
                          <label className="form-label" htmlFor="emailAddress">Password</label>
                          <input type="email" id="emailAddress" name="password" value={this.state.user.password} onChange={this.changeHandler} className="form-control form-control-lg" />
                          <span style={{color:'red'}}>{this.state.errors['password']}</span>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <label className="form-label select-label">Choose Role </label>
                        &nbsp; &nbsp;
                        <select className="select form-control-lg" name="userrole" value={this.state.user.userRole} onChange={this.changeHandler}>
                          <option  value="1" disabled>Choose option</option>
                          <option  value= "READER" onChange={this.changeHandler} >Reader</option>
                          <option  value="AUTHOR" onChange={this.changeHandler}>Author</option>
                          <option  value= "PUBLISHER" onChange={this.changeHandler}>Publisher</option>
                        </select>
                      </div>
                    </div>
                    <div className="mt-4 pt-2">
                    <span style={{color:'red'}}>{this.state.msg}</span> <br />
                      <input className="btn btn-primary btn-lg" type="submit" value="Submit" onClick={this.onSignUp} />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  onSignUp=()=>{
    if(this.handleValidation()){
      console.log(this.state.user);
      this.postUser(this.state.user);
    }else{
      console.log("Validation not passed!!")
    }
  }

  changeHandler=(event)=>{
    this.setState(
      {
        user:{
          ...this.state.user,
          [event.target.name]: event.target.value
        }
      }
    )
  }

  async postUser(user) {
    try {
      const response = axios.post("http://localhost:8080/api/user/signUp", user);
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

  handleValidation(){
    let name = this.state.user.userName;
    let email = this.state.user.emailId; 
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
}