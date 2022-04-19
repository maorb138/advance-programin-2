import './App.css';
import Nav from './components/Nav';
import { useState } from 'react';
import Login from './components/Login';
import Register from './components/Register';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import users from './components/db';
import ChatPage from './components/ChatPage';
import Home from './components/Home';

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
    //{page !== 'Register' ? <Login /> : <Register />}
    return (

        <Router>
        <Home/>
            <div className="App">
                <Nav />
               
                <Switch>
                    <Route exact path='/'>
                        <Login users={_users} />
                    </Route>
                    <Route path='/register'>
                        <Register func={foo}/>
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
