import { useState } from 'react';
import './Register.css';
import $ from 'jquery'
import React from 'react';
import './db.js'

function Register(props) {

    const registerValid = () => {
        var username = document.getElementById("userName").value;
        var nickname = document.getElementById("nickname").value;
        var password = document.getElementById("password").value;
        var confirmPass = document.getElementById("confirmPass").value;
        var myImage =  document.getElementById("image-input").files.length 
        props.func({ username: "omri", password: "1010" });
        console.log(username, nickname, password, confirmPass);
        passwordValidation(password, confirmPass);
        var nicknameArray=new Array();
        var passwordArray=new Array();
        var imageArray=new Array();
        const user = new Map();
        const RegUser = [{ nickN: '',imgUrl:'' }]
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
            passwordArray.push(""+password);
            
        } else {
            console.log("its NOT ok");
        }
        if(NickNameValidation(nickname)){
            ////no nickname so i create a new one called NewnickName;
            const threeLeeter= username.substring(0,2);
            let Newnickname=threeLeeter+Math.floor(Math.random() * 50)+Math.random().toString(36).replace(/[^a-z]+/g, '').substring(0, 2);
          alert("you didnt chose nickname");
          alert("your nickname is:"+Newnickname);
            nicknameArray.push(""+Newnickname);
            RegUser.nickN=Newnickname;
        }else{
            ///he wrote nickname in field;
            nicknameArray.push(""+nickname);
            RegUser.nickN=nickname;
        }

        function NickNameValidation(nickname){
        if(nickname===''){
           return true;  
        }else{
            return false;
        }
    }
    
    if(ImageValidation(myImage)){
        alert("you didnt choose any image");
        alert("this is your new profile image:");
        let i = Math.floor(Math.random() * 25);
        var newImage=window.open('./Emoji/'+i+'.png', "", "width=400,height=400");
        RegUser.imgUrl=newImage;
        imageArray.push(""+i);
        return;
    }else{
        imageArray.push(""+myImage);
        RegUser.imgUrl=myImage;
       
    }
        function ImageValidation(myImage){
        if(myImage===0){    
        return true;
        }else{
            return false;
        }
    }

    //     if(printArray(imageArray,passwordArray,nicknameArray)){
    //         alert("tr");
    //     }
    // function printArray(imageArray,passwordArray,nicknameArray){
    //     for (let index = 0; index <1; index++) {
    //         console.log(passwordArray(index).value);
    //         console.log(nicknameArray(index).value);
         
    //     }
    //     return true;


    // }


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

