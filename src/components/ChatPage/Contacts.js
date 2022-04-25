import './ChatPage.css';
import { NavLink, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Avatar from './../Image/profile-picture-boy-2.jpeg';
import './Sidebar.css';
import './PopupImg.css';
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
        <div className='contactName'>{friend.username}</div>
                <img className='imgcon' src={getImage(friend.username)} onClick={PopupImg}></img>
                <time className='time'><span>{friend.last}</span></time>
        </div> 
           
        </li>
    })


    return (
        <div class="card">
            <div class="card-header">
                <h6>
                    welcome {user.username}
                </h6>
                <img id="myImg" className='myImg' onClick={PopupImg} src={user.image} />
                    <div id="myModal" class="modal">
                    <span class="close">&times;</span>
                    <img class="modal-content" id="img01"/>
                    <div id="caption"></div>
                  </div>
                <input className="searchBox" type='search' placeholder='search'></input>
                </div>
                <ul class="list-group list-group-flush">
                <NavLink to='#' class="list-group-item">An item</NavLink>
                {showContacts}
            </ul>

            <button type="button" onClick={() => { addFriend('user3') }} className="btn btn-primary addFriend">Add a Friend</button>
            </div>
        )
}


export default Contacts;