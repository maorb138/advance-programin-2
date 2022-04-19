import './App.css';
import Nav from './components/Nav/Nav';
import { useState } from 'react';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import users from './components/DataBase/db';
import ChatPage from './components/ChatPage/ChatPage';
import Home from './components/HomePage/Home';


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
        <Home/>
            <div className="App">
                <Nav />
                <Switch>
                    <Route exact path='/login'>
                        <Login users={_users} />
                    </Route>
                    <Route path='/register'>
                        <Register users={_users} func={foo}/>
                    </Route>
                    <Route path='/chat'>
                        <ChatPage />
                </Route>
                    
                </Switch>
               
            </div>
        
        </Router>
    );
}

export default App;
