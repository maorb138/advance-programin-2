import './ChatPage.css';
import { NavLink, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './Sidebar.css';
import './PopupImg.css';
import './Modal.css';
import { PopupImg } from './Sidebar.js';






function Contacts({ user, contacts, users, addFriend, addContact, changeChat }) {
    
    function getImage(user){
        var image;
        users.map((x)=>{
            if(x.username===user)image=x.image;
        })
        return image;
    }
   
    const showContacts = contacts.map((friend) => {
        const q = user.contacts.filter((x) => {
            return x.username === friend.username;
        })
        const ken = q[0].mem[0];

        console.log(friend);
        
        return <li onClick={(e) => changeChat(friend.username)} class="list-group-item profile">
        <div className='contactProfile'> 
        <div className='contactName'><h6>{friend.username}</h6></div>
                <img className='imgcon' src={getImage(friend.username)} onClick={PopupImg}></img>
               { console.log(friend.last)}
                <span className='lastM'>{friend.last&&friend.last.message}</span>
                <time className='time'><span>{friend.last&&friend.last.time}</span></time>
               
        </div> 
           
        </li>
    })
   const modelpop = () => {
    var moddd = document.getElementById("mym1");
    var btn = document.getElementById("myb1");
    var span = document.getElementsByClassName("close")[0];
    btn.onclick = function() {
      moddd.style.display = "block";
    }
    span.onclick = function() {
      moddd.style.display = "none";
    }
    window.onclick = function(event) {
      if (event.target == moddd) {
        moddd.style.display = "none";
      }
    }
   }
   const listContact=user.contacts.map((friend)=>{
    return <li><a href="#" >{friend.username}</a></li>
});
   function Search(){
 var input, filter, ul, li, a, i;
 input = document.getElementById("mySearch");
 filter = input.value.toUpperCase();
 ul = document.getElementById("myMenu");
 li = ul.getElementsByTagName("li");


 for (i = 0; i < li.length; i++) {
   a = li[i].getElementsByTagName("a")[0];
   if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
     li[i].style.display = "";
   } else {
     li[i].style.display = "none";
   }
 }



   }

  
     
   
    


    return (
        <div class="card">
            <div class="card-header">
                <h6 className='nameStyle'>
                    welcome {user.username}
                </h6>
                <img id="myImg" className='myImg' onClick={PopupImg} src={user.image} />
                    <div id="myModal" class="modal">
                    <span class="close">&times;</span>
                    <img class="modal-content" id="img01"/>
                    <div id="caption"></div>
                  </div>
              
                </div>
                <ul class="list-group list-group-flush">
                {showContacts}
            </ul>

            <button id="myb1" type="button" onClick={modelpop} className="btn btn-primary addFriend">Add a Friend</button>
            <div>
            <div id="mym1" className="mod1">
            <span><h4 className='h4modal'>Search friend</h4></span>
              <div className="mod2">
                <span class="close">&times;</span>
                <div className="search">
                <div className="searchInputs">
                <ul id="myMenu">
                {listContact}
                </ul>
                  <input
                  id='mySearch'
                    type="text"
                    placeholder="Search..."
                    onKeyUp={Search}
                  />
               </div>
                </div>
              </div>
              
            </div>
          </div>
            </div>
        )
}


export default Contacts;