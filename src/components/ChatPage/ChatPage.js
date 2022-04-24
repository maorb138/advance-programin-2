
import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './ChatPage.css';
import Contacts from './Contacts';
import Messages from './Messages';
import Sidebar from './Sidebar';

function ChatPage({ users, addContacts }) {
    var messages1 = ['c1', 'c2', 'c1', 'c2', 'c1', 'c2', 'c1', 'c2', 'c1', 'c2', 'c1', 'c2', 'c2'];
    const [messages, setMess] = useState(messages1);
    const [user, setUser] = useState(useLocation().state);
    const [contacts, setcontacts] = useState(user.contacts);
    console.log(user.contacts);

    //document.getElementsByClassName('mainChat')[0].scrollTop = document.getElementsByClassName('mainChat')[0].scrollHeight;

    const changeChat = (contact) => {
        user.contacts.map((e) => {
            if (e.username == contact) {
                console.log(e)
                setMess([e.mem])
            }

        })
    }

    const showMessege = (e) => {
        var message = document.getElementsByClassName("textinp")[0];
        if (e.keyCode === 13 && message.value!==''){
            const newMess = messages.concat([e.target.value]);
            setMess(newMess);
            message.value = '';
        }
        else if (e.target.tagName.toLowerCase() == 'button' && message.value !== '') {
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
        users.map((x) => {
            if (x.username !== username)count++;

        });
        if (count == users.lenght) {
            console.log('not exists');
            return;
        }
        addContacts(user, contacts.concat([{ username: 'user1', mem: '' }]));
        setcontacts(contacts.concat([{ username: 'user1', mem: '' }]))

    }
    console.log(user.contacts);
    return (
        <div className="chat1">
            {user !== null ? < Contacts user={user} contacts={contacts} users={users} addFriend={addFriend} changeChat={changeChat} /> : null}

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