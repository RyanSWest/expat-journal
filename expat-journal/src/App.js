import logo from './logo.svg';
import './App.css';
import Places from './components.js/places';
import Register from './components.js/register';
import Login from './components.js/login';
import Dashboard from './components.js/dashboard';
import TestPlace from './components.js/testPlace';
import Nav from './components.js/nav';
import Place from './components.js/place';
import EditForm from './components.js/editForm';
import{ BrowserRouter as Router, Route, Redirect} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
      <Router> 
      <Route exact path = "/" component={Places}/> 
      <Route exact path = "/register" component = {Register}/> 
      <Route exact path = "/login" component = {Login}/>
      <Route exact path = "/dashboard" component = {Dashboard}/>
      <Route exact path = '/places/:id'component= {Place}/>
      <Route exact path = '/places/:id/stories/:id' component = {EditForm}/>
       </Router>
    </div>
  );
}

export default App;
