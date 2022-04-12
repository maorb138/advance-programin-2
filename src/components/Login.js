import './LogIn.css';
import users from './db.js';
import { Link } from 'react-router-dom';


function Login() {

    const verifyUser = () => {
        var username = document.getElementById("user").value;
        var password = document.getElementById("floatingPassword").value;
        var verify = document.getElementById("verify");
        users.map((x) => {
            if (username == x.username && password == x.password) {
                console.log("yees you are login");
                verify.href = "/register";
                console.log(verify);
                return;
            }

        });
    }
    return (
        <div className="login">
            <h3> Login to Your Account</h3><br></br>
            <div className="form-floating mb-1">
                <input type="username" id="user" className="form-control"  placeholder="Username"></input>
                <label>Username</label>
            </div><br></br>
            <div className="form-floating">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password"></input>
                <label >Password</label>
            </div><br></br>
            <button onClick={verifyUser} id="verify" type="submit" className="btn btn-primary mb-1">Login</button>      </div>
            );
}

export default Login;
