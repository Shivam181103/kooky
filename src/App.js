import logo from './logo.svg';
import './App.css';
import Landing from './components/landing';
 import OrderNow from './components/orderNow';
import { BrowserRouter as Router, Routes, Switch, Route, BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <>


      <Router>
       
        <Routes>
          <Route path='/' exact element={<Landing />} />

          <Route path='/ordernow' element={<OrderNow />} />

        </Routes>
       

      </Router>
    </>
  );
}

export default App;
