import './ChatPage.css';
import { NavLink, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';



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
                <h3>
                    hello {user.username}
                    </h3>
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

export default Contacts;