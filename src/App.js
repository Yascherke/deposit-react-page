import './App.css';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import Dashboard from './components/Dashboard';
import Reports from './components/Reports';
import { BrowserRouter, Route } from 'react-router-dom';
import Orders from './components/Orders';
import Customers from './components/Customers';
import Integrations from './components/Integrations';

function App() {
  return (
    <BrowserRouter>
    <div className="App">

      <Sidebar />
      <Dashboard />
      <Route path='/Main' component={Main}/>
      <Route path='/Reports' component={Reports}/>
      <Route path='/Orders' component={Orders}/>
      <Route path='/Customers' component={Customers}/>
      <Route path='/Integrations' component={Integrations}/>

    </div>
    </BrowserRouter>
  );
}

export default App;
