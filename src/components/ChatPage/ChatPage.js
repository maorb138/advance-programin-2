
import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './ChatPage.css';
import Contacts from './Contacts';
import Messages from './Messages';
import Sidebar from './Sidebar';

function ChatPage({ users, addContacts, saveData }) {
    const messages1 = [{ sent: false, message: 'hello1' }, { sent: true, message: 'hello2' }, { sent: true, message: 'hello3' }, { sent: false, message: 'hello4' }];
    const [messages, setMess] = useState(messages1);
    const [user, setUser] = useState(useLocation().state);
    const [contact, setContact] = useState('');

    const [contacts, setcontacts] = useState(user.contacts);
    console.log(user.contacts);

    //document.getElementsByClassName('mainChat')[0].scrollTop = document.getElementsByClassName('mainChat')[0].scrollHeight;

    const changeChat = (contact) => {
        user.contacts.map((e) => {
            if (e.username == contact) {
                console.log(e);
                //var c = e.contacts.filter(i => i.username == contact);
                setMess(e.mem);
                setContact(contact);
            }

        })
    }

    const showMessege = (e) => {
        var message = document.getElementsByClassName("textinp")[0];
        if (e.keyCode === 13 && message.value !== '') {
            const newMess = messages.concat([{ sent: true, message: e.target.value }]);
            setMess(newMess);
            saveData(user, contact ,e.target.value)
            message.value = '';
        }
        else if (e.target.tagName.toLowerCase() == 'button' && message.value !== '') {
            console.log(message.value);
            const newMess = messages.concat([{ sent: true, message: message.value }]);
            setMess(newMess);
            saveData(user, contact, e.target.value)

            message.value = '';

        }
    }

    const addFriend = function (username) {

        var flag = true, count = 0;

        if (username == user.username) {
            console.log("cant add yourself");
            flag = false;
            return;
        }
        user.contacts.forEach((i) => {
            if (username == i.username) {
                console.log("already friends");
                flag = false;
            }
        })
        users.map((x) => {
            if (x.username != username)count++;

        });
        if (count === users.length) {
            console.log('not exists');
            return;
        }

        if (!flag) return;
        addContacts(user, contacts.concat([{ username: username, mem: [] }]));
        setcontacts(contacts.concat([{ username: username, mem: [] }]))

    }
    console.log(user);
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