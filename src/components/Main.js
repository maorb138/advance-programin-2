import './LogIn.css';
import Login from './Login';
import Register from './Register';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';



function Main() {


    return (
        <Router>
            <div className="main">
                <Switch>
                    <Route exact path="/">
                        <div> <Home/> </div>
                    </Route>
                    <Route path="/login">
                        <Login/>
                    </Route>
                    <Route path="/register">
                        <Register />

                    </Route>
                </Switch>
            </div>
        </Router>
    );
}
export default Main;

