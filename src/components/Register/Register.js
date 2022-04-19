import { useState } from 'react';
import './Register.css';
import React from 'react';
import './../DataBase/db.js';
import { useHistory } from "react-router-dom";
import  users from './../DataBase/db.js';


function Register(props) {
    const history = useHistory();
    const [err, seterr] = useState("");
    const registerValid = () => {
        var username = document.getElementById("userName").value;
        var nickname = document.getElementById("nickname").value;
        var password = document.getElementById("password").value;
        var confirmPass = document.getElementById("confirmPass").value;
        var myImage =  document.getElementById("image-input").files.length 
        props.func({ username: "omri", password: "1010" });
        console.log(username, nickname, password, confirmPass);
        passwordValidation(password, confirmPass);
         NickNameValidation(nickname);
         ImageValidation(myImage);

    
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

        function NickNameValidation(nickname){
            if(nickname===''){
              ////no nickname so i create a new one called NewnickName;
              var threeLeeter= username.substring(0,2);
              var Newnickname=threeLeeter+Math.floor(Math.random() * 50)+Math.random().toString(36).replace(/[^a-z]+/g, '').substring(0, 2);
              
            alert("you didnt chose nickname");
            alert("your nickname is:"+Newnickname);
            nickname=Newnickname;
              return nickname;
            }else{
                 ///he wrote nickname in field;
                console.log(nickname)
                return nickname;  
            }
        }
        users.map((x) => {
            if (username === x.username && username == x.username) {
                alert("An existing username in the system");
                history.push("/login");
                  
            }
            if(username !== x.username && username!=x.username ){
                history.push("/chat");
            } 
        });


  
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
            <div>
            <input type="file" id="image-input" onClick={displayimage} accept="image/jpeg, image/png, image/jpg" />
            <div id="display-image" />
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
function displayimage(){
    const image_input = document.querySelector("#image-input");

image_input.addEventListener("change", function() {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    const uploaded_image = reader.result;
    document.querySelector("#display-image").style.backgroundImage = `url(${uploaded_image})`;
  });
  reader.readAsDataURL(this.files[0]);
    });
    }
    function ImageValidation(myImage){
        if(myImage===0){    
            alert("you didnt choose any image");
            alert("this is your new profile image:");
            let i = Math.floor(Math.random() * 25);
           var newImage=window.open('./Emoji/'+i+'.png', "", "width=400,height=400");
           myImage=newImage;
           return myImage;
        }else{
            return myImage;
        }
    }

