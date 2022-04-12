import './App.css';
import Nav from './components/Nav';
import Main from './components/Main';
import { useState } from 'react';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';
/*
const x = () => {
    var elm = document.getElementsByClassName("nav-link");
    console.log(elm[1].href="www.google.com");
    elm[1].textContent = elm[1].textContent == "Hello" ? "Register" : "Hello";
}*/

function App() {

    return (
        <div className="App">
            <Nav/>
            <Main />
    </div>
  );
}

export default App;
