import logo from '../logo.svg'
import '../assets/css/login.css'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  

  const handleLogin = (e) => {
    e.preventDefault();
    const payload = { username, password }
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    axios.post('http://localhost:3001/user/signin', payload, config)
      .then(response => {
        localStorage.setItem("token", `JWT ${response.data.token}`);
        console.log(response.data.token);
        navigate('/');
      })
      .catch(error => {
        console.log(error)
      })
  }

  const tampil_password = (e) => {
    var x = document.getElementById("password");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
  }
  return(
    <>
    <form onSubmit={handleLogin} className="login">
      <div className="group">
        <img src={logo} alt=""/>
      </div>
      <div className="input-group">
          <input 
          id="username" 
          type="username" 
          name="username" 
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          autoComplete={"off"} 
          required 
          autoFocus />
          <span>Username</span>
      </div>
      <div className="input-group">
          <input 
          type="password" 
          name="password" 
          id="password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete={"off"}
          required />
          <span>Password</span>
      </div>
      <div className="input-checkbox">
          <input type="checkbox" onClick={tampil_password} />
          <span> Tampilkan Password</span>
      </div>
      <div className="group">
        <button type="submit">Login</button> 
      </div>
      <div className="group">
        <a href="/register">Silahkan Register jika tidak punya</a>
      </div>
    </form>
    </>
  )
}
export default Login;