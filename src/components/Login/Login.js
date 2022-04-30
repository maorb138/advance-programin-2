import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import loginImg from './../Image/login.png';
import login_user from './../Image/login_user.png';



import './LogIn.css';


function Login(props) {
    const hist = useHistory();
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
        props.users.map((user) => {
            if (username === user.username && password === user.password) {
                console.log("yees you are login", user);
                localStorage.setItem('user', JSON.stringify(user));
                console.log(localStorage);

                hist.push('/chat');
            }
        

        });
        console.log(username, password);
        console.log(props.users.length);

    }

    return (
        <div className="login">
            <img className='login_user' src={login_user}></img>
            <br></br>
            <h3> Login Your Account</h3>
            {err !== "" ? <div className="error">{err}</div> : null}
                <input type="username" id="user" className="form-control" placeholder="Username "></input>
            <br></br>
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password"></input>
            <br></br>
            <button onClick={verifyUser} id="verify" type="submit" className="btn btn-primary mb-1"><img className="loginImg" src={loginImg}></img>&nbsp;Login</button> </div>
            );
}

export default Login;