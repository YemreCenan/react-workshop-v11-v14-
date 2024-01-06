import logo from './logo.svg';
import './App.css';
import Navi from './layout/Navi'
import Dashboard from './layout/Dashboard'
import { Container } from 'semantic-ui-react';
function App() {
  return (

<div className="App">
      <Navi />
      <Container className="main">
        <Dashboard />
      </Container>
    </div>


  );
}

export default App;
