//import logo from './logo.svg';
import './App.css';
import Navbar from './components/client/Navbar';
import Products from './components/client/Products';
import CheckOutPage from './components/client/CheckOutPage';
import {Switch, BrowserRouter as Router, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/checkout-page">
            <CheckOutPage/>
          </Route>

          <Route path="/">
            <Products/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
