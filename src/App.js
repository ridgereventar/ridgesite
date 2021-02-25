import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from './pages/Home.js';
import Sui from './pages/Sui.js';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/sui" exact component={Sui}/>

      </Switch>
    </BrowserRouter>
  );
}

export default App;