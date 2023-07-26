import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import SignUp from './components/SignUp';
import {Routes,Route} from "react-router-dom";
import Login from './components/Login';


function App() {
  return (
    <> 
     <Header />
     <Routes>
        <Route path='signup' element={<SignUp/>} />
        <Route path='login' element={<Login/>} />
     </Routes>
     </>
   
  );
}

export default App;