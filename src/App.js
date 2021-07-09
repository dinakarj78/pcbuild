import './App.css';
import Info from './HOME/Products/Cpus/Cpu'
import{BrowserRouter}from 'react-router-dom'
import {Switch} from  'react-router-dom'
import {Route} from  'react-router-dom'   

import Home, { Fabicon, Navs } from './HOME/Home';
import { Cart } from './Cart';
function App() {
    return(
<BrowserRouter>
<Navs />
<Fabicon />
<Switch>
  <Route path="/" exact component ={Home} />
  <Route path="/processors" exact component={Info}/> 
   <Route path="/cart" exact component={Cart}/>
</Switch>
</BrowserRouter>
    )
  }

export default App;

