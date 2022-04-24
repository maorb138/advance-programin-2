import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";


import './LogIn.css';


function Login(props) {
    const history = useHistory();
    const [err, seterr] = useState("");
    const verifyUser = () => {
        var username = document.getElementById("user").value;
        var password = document.getElementById("floatingPassword").value;
        var verify = document.getElementById("verify");

        if (username === '' & password === '') {
            seterr("type a username and password");
            return;
        } else if (username === '') {
            seterr("type a username");
            return;
        }
        else if (password === '') {
            seterr("type a password");
            return;
        }
        seterr('');
        props.users.map((x) => {
            if (username === x.username && password === x.password) {
                console.log("yees you are login");
                history.push("/chat",x);
                return;
            }
        

        });
        console.log(username, password);
        console.log(props.users.length);

    }

    return (
        <div className="login">
            <h3> Login to Your Account</h3><br></br>
            {err !== "" ? <div className="error">{err}</div> : null}
            <div className="form-floating mb-1">
                <input type="username" id="user" className="form-control" placeholder="Username "></input>
                <label>Username</label>
            </div><br></br>
            <div className="form-floating">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password"></input>
                <label >Password</label>
            </div><br></br>
                <button onClick={verifyUser} id="verify" type="submit" className="btn btn-primary mb-1">Login</button> </div>
            );
}

export default Login;