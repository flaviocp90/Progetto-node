import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AddProduct from './screens/AddProduct'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/addProduct' component={AddProduct} />
      </Switch>
    </Router>

  );
}

export default App;
