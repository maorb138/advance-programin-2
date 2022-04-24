import './App.css';
import Nav from './components/Nav/Nav';
import { useState } from 'react';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import users from './components/DataBase/db';
import ChatPage from './components/ChatPage/ChatPage';
import Home from './components/HomePage/Home';
import Sidebar from './components/ChatPage/Sidebar';
import Soon from './components/ChatPage/Soon';


/*
const x = () => {
    var elm = document.getElementsByClassName("nav-link");
    console.log(elm[1].href="www.google.com");
    elm[1].textContent = elm[1].textContent == "Hello" ? "Register" : "Hello";
}*/

function App() {
    const [_users, setUsers] = useState(users);

    const addUsers = function (newusers)  {
        console.log(newusers);
        console.log(_users);
        setUsers(newusers);
    }

    const addContacts = function (user, contacts) {
        //console.log(a, b);
        const newUser = { username: user.username, nickname: user.nickname, password: user.password, image: user.image, contacts: contacts };
        const newUsers = _users.filter((i) => {
            return user.username !== i.username;
        })
        addUsers(newUsers.concat(newUser));
    }

    const saveData = function (user, contact, message) {
       
        _users.map((key, value) => {
            if (user.username === key.username) {
                user.contacts.map((con) => {
                    if (con.username === contact) {
                        con.mem.concat([{ sent: true, message: message }]);
                    }
                })
            }

            if (contact.username === key.username) {
                user.contacts.map((con) => {
                    if (user.username === con.user) {
                        con.mem.concat([{ sent: false, message: message }]);
                    }
                })
            }
        })

        addContacts(user,)
    }
    return (

        <Router>
        
            <div className="App">
                <Nav />
                <Switch>
                    <Route exact path='/'>
                    <Home></Home>
                        <Login users={_users} />
                    </Route>
                    <Route path='/register'>
                    <Home></Home>
                        <Register users={_users} addUsers={addUsers}/>
                    </Route>
                    <Route path='/chat'>
                        <ChatPage users={users} addContacts={addContacts} saveData={saveData} />
                </Route>
                <Route path='/sidebar'>
                <Sidebar />
        </Route>
        <Route path='/soon'>
        <Soon />
</Route>
        
                
                    
                </Switch>
               
            </div>
        
        </Router>
    );
}

export default App;
