//import logo from './logo.svg';
import './App.css';
import Navbar from './components/client/Navbar';
//import Product from './components/client/Product';
import Products from './components/client/Products';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      {/*<Product></Product>*/}
      <Products></Products>
    </div>
  );
}

export default App;
