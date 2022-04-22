
import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './ChatPage.css';
import Contacts from './Contacts';
import Messages from './Messages';

function ChatPage({ users, addContacts }) {
    var messages1 = ['c1', 'c2', 'c1', 'c2', 'c1', 'c2', 'c1', 'c2', 'c1', 'c2', 'c1', 'c2', 'c2'];
    const [messages, setMess] = useState(messages1);
    const [user, setUser] = useState(useLocation().state);
    const [contacts, setcontacts] = useState(user.contacts);
    //document.getElementsByClassName('mainChat')[0].scrollTop = document.getElementsByClassName('mainChat')[0].scrollHeight;


    const showMessege = (e) => {
        var message = document.getElementsByClassName("textinp")[0];
        if (e.keyCode === 13 ){
            console.log('--------->', messages, e.target);
            const newMess = messages.concat([e.target.value]);
            setMess(newMess);
            console.log('--------->', messages);
            message.value = '';
        }
        else if (e.target.tagName.toLowerCase() == 'button') {
            console.log(message.value);
            const newMess = messages.concat(message.value);
            setMess(newMess);
            message.value = '';

        }
    }

    const addFriend = function (username) {

        let flag = 1, count = 0;

        if (username == user.username) {
            console.log("cant add yourself");
            return;
        }
        flag = user.contacts.forEach((i) => {
            if (username == i.username) {
                console.log("already friends");
                return 0;
            }
            return 1;
        })
        console.log(contacts);
        users.map((x) => {
            if (x.username !== username)count++;

        });
        if (count == users.lenght) {
            console.log('not exists');
            return;
        }
        console.log('now you and', username, 'are friends');
        console.log(contacts)
        //setcontacts(contacts.concat([{ username: 'user1', mem: '' }]))
        addContacts(user, [{ username: 'user1', mem: '' }]);

    }
    //console.log(location.state);
    return (
        <div className="chat1">
            {user !== null ? < Contacts user={user} contacts={contacts} users={users} addFriend={addFriend} /> : null}

            <div className="mainChat">
                <Messages messages={messages} />
            </div>
            <div className="addButtons">
                hello world
                </div>
            <div className="form-control1">
                <input autoComplete="off" onKeyDown={showMessege } className="textinp" type="text" id="formGroupExampleInput" placeholder="Enter a messege"></input>
                <button onClick={showMessege } type="button" class="btn btn-success">Send</button>
            </div>
         </div>
        );
}

export default ChatPage;