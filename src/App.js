import { Component } from "react";
import Arry from "./components/Arry";
import Emp from "./components/Emp";
import User from "./components/User";
import 'bootstrap/dist/css/bootstrap.min.css';
import Post from "./components/Post";
import Todo from "./components/Todo";
import SignUp from "./components/SignUp";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import PageNotFound from "./components/PageNotFound";
import SignUpTest from "./components/SignUpTest";

export default class App extends Component{
  /* Which function does react call : render() */
  render(){/* render must return something(JSX) */
    return (
      <div>
        <Navbar />
        {/* <Routes>
          <Route path="/" element={ <Arry />} />
          <Route path="/posts" element={ <Post />} />
          <Route path="/employee" element={ <Emp />} />
          <Route path="/users" element={ <User />} />
          <Route path="/sign-up" element={ <SignUp />} />
          <Route path="/todo" element={ <Todo />} />
          <Route path="*" element={ <PageNotFound />} />
        </Routes> */}
        <SignUpTest />
      </div>
    )
  }
}