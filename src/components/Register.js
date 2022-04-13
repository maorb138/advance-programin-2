import { useState } from 'react';
import './Register.css';


function Register(props) {

    const registerValid = () => {
        var username = document.getElementById("userName").value;
        var nickname = document.getElementById("nickname").value;
        var password = document.getElementById("password").value;
        var confirmPass = document.getElementById("confirmPass").value;
        var myImage =  document.getElementById("formFile").files.length 

        /*
        props.users.push({ username: "omri", password: "1010" });
        var new_users = props.users;    
        console.log(new_users,11);
        props.func(new_users);
        var navLink = document.getElementsByClassName('nav-link');
        navLink[0].style.visibility = "hidden";
        navLink[1].style.visibility = "hidden";
        */ 
        console.log(username, nickname, password, confirmPass);
        if (passwordValidation(password, confirmPass)) {
            console.log("its ok");
        } else {
            console.log("its NOT ok");
        }
        if(nickname==''){
            const threeLeeter= username.substring(0,2);
            nickname=threeLeeter+Math.floor(Math.random() * 50)+Math.random().toString(36).replace(/[^a-z]+/g, '').substring(0, 2);
           alert("you didnt chose nickname");
           alert("your nickname is:"+nickname);
        
          
        }
        
        if(myImage==0){
            alert("you didnt chose image");
            var emoji=<p style="font-size:100px">&#128540;</p> 
            function myImage(emoji){
                return(
                    <div>
                   <img src={emoji} alt="emoji" height="50" width="50"/>
                    </div>
                    
                );
            
            }
        var im=myImage(emoji);
        alert("image: "+im)
            console.log(emoji);
            alert(emoji)
            let i = Math.floor(Math.random() * 50);
         let newImage=emoji+i;
         alert("no image");
         console.log(newImage);
            alert=(newImage);      
        }
    


    }
    return (
        <form id='form1' className="row g-3">
            <div className="header1"> Sign-up</div>

            <div className="md-4">
                <label className="form-label">Username:</label>
                <input id="userName" type="text"  className="form-control inp" required></input>
            </div>
            <div className="md-4">
                <label className="form-label">Nickname:</label>
                <input id="nickname" type="text" className="form-control inp" ></input>
            </div>
            <div className="md-4">
                <label className="form-label">password:</label>
                <input id="password" type="password" className="form-control inp"  required></input>
            </div>
            <div className="md-4">
                <label className="form-label">confirm password:</label>
                <input id="confirmPass" type="password" className="form-control inp" required></input>
            </div>
            <div className="mb-4">
                <label className="form-label">image:</label>
                <input className="form-control inp" type="file" id="formFile" accept="image/*" ></input>
            </div>
            <div className="col-12">
                <button type="submit" onClick={registerValid} className="btn btn-primary mb-1">Sign-up</button>
            </div>
        </form>
    );
}

export default Register;

function passwordValidation(pass, confPass) {
    //check if the password equal to the confirm password
    if (pass !== confPass) {
        console.log("invalid password", pass);
        alert()
        return false;

        //check if the length of the password is at least 6 charcters
    } else if (pass.length < 6) {
        console.log("invalid password length");
        return false;
        //check if the password contains at least one capital letter
    } if (true) {
        let count = 0;
        let i = 65;
        for (i; i <= 90; i++) {
            if (pass.includes(String.fromCharCode(i))) count++;
        }
        if (count < 1) {
            alert("need at least one capital letter");
            return false;
        }
    }
    //check if the password contains at least one small letter
    if (true) {
        let count = 0;
        let i = 97;
        for (i; i <= 122; i++) {
            if (pass.includes(String.fromCharCode(i))) count++;
        }
        if (count < 1) {
            alert("need at least one small letter");
            return false;
        }
    }
    return true;
}
