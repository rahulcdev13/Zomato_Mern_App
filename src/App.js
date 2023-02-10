import './App.css';
import Home from './Pages/Home';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Login from './Pages/Login';
import Signup from './Pages/Signup'
import NotFound from './Components/NotFound';  

function App() {
  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route path='/' element={<Home />}>Home</Route>
            <Route path='/orders' element={<Home />}>Order</Route>
            <Route path='/login' element={<Login />}>Login</Route>
            <Route path='/signup' element={<Signup />}>Home</Route>
            <Route path='*' element={<NotFound />} /> 
          </Routes>
        </Router> 
      </div>
    </>
  );
}

export default App;
