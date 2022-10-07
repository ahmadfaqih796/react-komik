import logo from '../logo.svg'
import '../assets/css/login.css'

function Login(){
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
    <form action="">
      <div className="group">
        <img src={logo} alt=""/>
      </div>
      <div className="input-group">
          <input id="username" type="username" name="username" autocomplete="off" required autofocus />
          <span>Username</span>
      </div>
      <div className="input-group">
          <input type="password" name="password" id="password" autocomplete="off" required />
          <span>Password</span>
      </div>
      <div className="input-checkbox">
          <input type="checkbox" onClick={tampil_password} />
          <span> Tampilkan Password</span>
      </div>
      <div className="group">
        <button id="submit" >Login</button> 
      </div>
      <div className="group">
        <a href="a">Silahkan Register jika tidak punya</a>
      </div>
    </form>
    </>
  )
}
export default Login;