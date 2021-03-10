import axios from "axios";
import React, { useState } from "react";
import Nav from './nav';
 
const Login = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const [ message, setMessage]= useState(
       ""
  )

  const handleInput = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  



  const onSubmit = (e)=> {
      e.preventDefault()
      axios.post("https://bw-expat-journal2.herokuapp.com/api/users/login", user)
      .then((res)=> {
          setMessage(res.data.message)
          console.log(res.data)
          localStorage.setItem("Authorization", res.data.user.token);
          localStorage.setItem('Username', user.username)
          localStorage.setItem("USERID", res.data.user.user_id)
      })
      .catch((err)=> console.log(err))
  };


  return (
    <div className="login">
        <Nav/>
      <h1>Login</h1>
       <h2>{message}</h2> 
      <form className="reg-form" type="submit" onSubmit={onSubmit}>
        <input
          type="text"
          name="username"
          onChange={handleInput}
          value={user.username}
          placeholder="username"
        />
        <input
          type="text"
          name="password"
          onChange={handleInput}
          value={user.password}
          placeholder="password"
        />

        <button type="submit">Enter</button>
      </form>
    </div>
  );
};

export default Login;
