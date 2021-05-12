import logo from './logo.svg';
import './App.css';
import Home from './component/homepage';
import {BrowserRouter as Router, Switch, Route, Link,useLocation} from "react-router-dom";

function App() {
  
  return (
    <div className="container">
      <Router>
        <Route path="/">
          <Home />
        </Route>
      </Router>
    </div>
  );
}

export default App;
