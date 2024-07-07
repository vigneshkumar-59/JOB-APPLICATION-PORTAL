import './Register.css';
import { Link } from 'react-router-dom';
function Register()
{
    return(
        <div className="Reg">
         <h2>Register</h2>
        <form>
          <p2>Full Name </p2>
          <input type="full-name" placeholder="" /><br></br>
          <p2>Mobile No.  </p2>
          <input type="Mobilenumber" placeholder="eg.91+9876543210" /><br></br>
          <p2>Email - ID   </p2>
          <input type="email-id" placeholder="eg.abcd@gmail.com" /><br></br>
          <p2>Password </p2>
          <input type="password"placeholder="" /><br></br>
          <p2>Cfrm-Pass</p2>
          <input type="retype-password"placeholder=""/>
          <br></br>
          <button>Register</button><br></br>
          <Link to="/"><button>Home</button></Link>
          <p>If You Already Registered? <Link to="/Login"><p1>Login</p1></Link> here</p>
        </form>
        </div>       
    );
}

export default Register;