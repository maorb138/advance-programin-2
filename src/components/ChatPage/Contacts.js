import './ChatPage.css';
import { NavLink, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Avatar from './../Image/profile-picture-boy-2.jpeg';
import './Sidebar.css';
import './PopupImg.css'


function Contacts({ user, contacts, users, addFriend, addContact }) {
    console.log(user.contacts);


    const showContacts = contacts.map((friend) => {
        console.log(friend.username);
        return <li class="list-group-item profile"> {friend.username}
        </li>
    })


    return (
        <div class="card">
            <div class="card-header">
                <h6>
                    hello {user.username}
                    </h6>
                    <img id="myImg" className='myImg' onClick={PopupImg} src={Avatar} />
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
            <button type="button" onClick={() => { addFriend( 'user3') }} className="btn btn-primary addFriend">Add a Friend</button>
            </div>
        )
}
function PopupImg(){
    var modal = document.getElementById("myModal");

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var img = document.getElementById("myImg");
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    img.onclick = function(){
      modal.style.display = "block";
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;
    }
    
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() { 
      modal.style.display = "none";
    }

}

export default Contacts;