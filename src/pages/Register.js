import logo from '../logo.svg'
import '../assets/css/login.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: ""
  });
  const [daftarUser, setDaftarUser] = useState([]);
  const handleUser = (e) => {
    const name = e.target.name 
    const value = e.target.value 
    setUser((values) => ({...values, [name]: value}))
  }

  const handleRegister = (e) => {
    e.preventDefault();
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    axios.post('http://localhost:3001/user/signup', user, config)
      .then(response => {
        let array = [...daftarUser]
        array.push(user)
        setDaftarUser(array);
        setUser({
          username: "",
          email: "",
          password: ""
        })
        navigate('/login');
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
    <form onSubmit={handleRegister} className="login">
      <div className="group">
        <img src={logo} alt=""/>
      </div>
      <div className="input-group">
          <input 
          id="username" 
          type="username" 
          name="username" 
          value={user.username}
          onChange={handleUser}
          autoComplete={"off"} 
          required 
          autoFocus />
          <span>Username</span>
      </div>
      <div className="input-group">
          <input 
          id="email" 
          type="email" 
          name="email" 
          value={user.email}
          onChange={handleUser}
          autoComplete={"off"} 
          required 
          autoFocus />
          <span>Email</span>
      </div>
      <div className="input-group">
          <input 
          type="password" 
          name="password" 
          id="password" 
          value={user.password}
          onChange={handleUser}
          autoComplete={"off"}
          required />
          <span>Password</span>
      </div>
      <div className="input-checkbox">
          <input type="checkbox" onClick={tampil_password} />
          <span> Tampilkan Password</span>
      </div>
      <div className="group">
        <button type="submit" onClick={handleRegister}>Register</button> 
      </div>
      <div className="group">
        <a href="/Login">kembali Login</a>
      </div>
    </form>
    </>
  )
}
export default Register;