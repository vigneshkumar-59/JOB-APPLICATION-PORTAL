import './Login.css'
import { Link } from 'react-router-dom';
function Login()
{
    return(
        <div className="UpHead">
      <form>
      <div className="User">
      <h2>Login</h2>
      <br></br>  
      <h1>Email ID</h1>
      <input type="Email-id" placeholder=" "/>
      <br></br>
      <h1>Password</h1>
      <input type="password" placeholder=" " />
      <br></br>
      <Link to="/Register"><p>Register For Free</p></Link>  
      <Link to="/Home1"><button>SignIn</button><br></br></Link>
      <Link to="/"><button>Home</button></Link>
      <br></br>
    </div>
    </form>
    </div>
    );
}

export default Login;