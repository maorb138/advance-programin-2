import { useState } from 'react';
import './Register.css';
import $ from 'jquery'
import React from 'react';

function Register(props) {

    const registerValid = () => {
        var username = document.getElementById("userName").value;
        var nickname = document.getElementById("nickname").value;
        var password = document.getElementById("password").value;
        var confirmPass = document.getElementById("confirmPass").value;
        var myImage =  document.getElementById("formFile").files.length 
        var nicknameArray=new Array();
        var passwordArray=new Array();
        var imageArray=new Array();
       

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
            passwordArray.push(password);
        } else {
            console.log("its NOT ok");
        }
        if(NickNameValidation(nickname)){
            const threeLeeter= username.substring(0,2);
            let Newnickname=threeLeeter+Math.floor(Math.random() * 50)+Math.random().toString(36).replace(/[^a-z]+/g, '').substring(0, 2);
          alert("you didnt chose nickname");
          alert("your nickname is:"+Newnickname);
            nicknameArray.push(Newnickname);
        }else{
            nicknameArray.push(nickname);
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
        imageArray.push(i);
    }else{
        imageArray.push(myImage);

    }
        function ImageValidation(myImage){
        if(myImage===0){    
        return true;
        }else{
            return false;
        }
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
