import axios from "axios";
import React, {useState} from "react";
import Nav from './nav'



const Register = ()=> {
    const [userData, setUserData]= useState({
        username: '',
        password: ''
    })
 


const handleInput = (e)=> {
    setUserData({...userData,
    [e.target.name]: e.target.value
})
}


const onSubmit = (e)=> {
    e.preventDefault();
    axios.post('https://bw-expat-journal2.herokuapp.com/api/users/register', userData)
    .then((res)=> {
        localStorage.setItem("token", res.data.token)
    })
    .catch((err)=> console.log(err));
    console.log("USER", userData)



}
 return (
     <div className = 'register'>
         <Nav/>
     <h1> Register</h1>
     <form className = 'reg-form' type= 'submit' onSubmit ={onSubmit}>
        <input
        type = 'text'
        name = 'username'
        onChange = {handleInput}
        value = {userData.username}
        placeholder = 'username'
        />
        <input
        type = 'text'
        name = 'password'
        onChange = {handleInput}
        value = {userData.password}
        placeholder = 'password'
        />

      <button type = 'submit'>Enter</button>
     </form>




     </div>
 )




}

 

export default Register