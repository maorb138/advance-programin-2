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

    const foo = function (user)  {
        console.log(user);
        console.log(_users.length);
        setUsers(_users.concat(user));
    }
    return (

        <Router>
        
            <div className="App">
                <Nav />
                <Switch>
                    <Route exact path='/login'>
                    <Home></Home>
                        <Login users={_users} />
                    </Route>
                    <Route path='/register'>
                    <Home></Home>
                        <Register users={_users} func={foo}/>
                    </Route>
                    <Route path='/chat'>
                        <ChatPage />
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
