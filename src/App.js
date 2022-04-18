import './App.css';
import Nav from './components/Nav';
import { useState } from 'react';
import Login from './components/Login';
import Register from './components/Register';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import users from './components/db';
import ChatPage from './components/ChatPage';

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
            <div className="App">
                <Nav />
                <title>
                Octoberfest
              </title>
              <link href="https://fonts.googleapis.com/css?family=Courgette|Open+Sans&display=swap" rel="stylesheet" /> 
              <section>
                <div className="leaf">
                  <div>  <img src="http://www.pngmart.com/files/1/Fall-Autumn-Leaves-Transparent-PNG.png" height="75px" width="75px" /></div>
                  <div><img src="http://www.pngmart.com/files/1/Autumn-Fall-Leaves-Pictures-Collage-PNG.png" height="75px" width="75px" /></div>
                  <div>  <img src="http://www.pngmart.com/files/1/Autumn-Fall-Leaves-Clip-Art-PNG.png" height="75px" width="75px" /></div>
                  <div><img src="http://www.pngmart.com/files/1/Green-Leaves-PNG-File.png" height="75px" width="75px" /></div>
                  <div> <img src="http://www.pngmart.com/files/1/Transparent-Autumn-Leaves-Falling-PNG.png" height="75px" width="75px" /></div>
                  <div>   <img src="http://www.pngmart.com/files/1/Realistic-Autumn-Fall-Leaves-PNG.png" height="75px" width="75px" /></div>
                  <div><img src="http://cdn.clipart-db.ru/rastr/autumn_leaves_025.png" height="75px" width="75px" /></div>
                </div>
                <div className="leaf leaf1">
                  <div>  <img src="http://www.pngmart.com/files/1/Fall-Autumn-Leaves-Transparent-PNG.png" height="75px" width="75px" /></div>
                  <div><img src="http://www.pngmart.com/files/1/Autumn-Fall-Leaves-Pictures-Collage-PNG.png" height="75px" width="75px" /></div>
                  <div>  <img src="http://www.pngmart.com/files/1/Autumn-Fall-Leaves-Clip-Art-PNG.png" height="75px" width="75px" /></div>
                  <div><img src="http://www.pngmart.com/files/1/Green-Leaves-PNG-File.png" height="75px" width="75px" /></div>
                  <div> <img src="http://www.pngmart.com/files/1/Transparent-Autumn-Leaves-Falling-PNG.png" height="75px" width="75px" /></div>
                  <div>   <img src="http://www.pngmart.com/files/1/Realistic-Autumn-Fall-Leaves-PNG.png" height="75px" width="75px" /></div>
                  <div><img src="http://cdn.clipart-db.ru/rastr/autumn_leaves_025.png" height="75px" width="75px" /></div>
                </div>
                <div className="leaf leaf2">
                  <div>  <img src="http://www.pngmart.com/files/1/Fall-Autumn-Leaves-Transparent-PNG.png" height="75px" width="75px" /></div>
                  <div><img src="http://www.pngmart.com/files/1/Autumn-Fall-Leaves-Pictures-Collage-PNG.png" height="75px" width="75px" /></div>
                  <div>  <img src="http://www.pngmart.com/files/1/Autumn-Fall-Leaves-Clip-Art-PNG.png" height="75px" width="75px" /></div>
                  <div><img src="http://www.pngmart.com/files/1/Green-Leaves-PNG-File.png" height="75px" width="75px" /></div>
                  <div> <img src="http://www.pngmart.com/files/1/Transparent-Autumn-Leaves-Falling-PNG.png" height="75px" width="75px" /></div>
                  <div>   <img src="http://www.pngmart.com/files/1/Realistic-Autumn-Fall-Leaves-PNG.png" height="75px" width="75px" /></div>
                  <div><img src="http://cdn.clipart-db.ru/rastr/autumn_leaves_025.png" height="75px" width="75px" /></div>
                </div>
              
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
                </section>  
            </div>
        </Router>
    );
}

export default App;
