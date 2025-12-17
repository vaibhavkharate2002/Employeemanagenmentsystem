// import logo from './logo.svg';
import './App.css';
import AddEmployee from './AddEmployee';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import GetEmployee from './GetEmployee';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Updateemp from './Updateemp';
import Adminnavbar from './Adminnavbar';
import Admindashbord from './Admindashbord';
import Contactus from './Contactus';
import Home from './Home';
import About from './About'; 
import Service from './Service'; 
import Employeedashbord from './Employeedashbord';
import LoginForm from './Loginform';
import Registerfrom from './Registerfrom';





function App() {
  return (
    <div className="App">
      
      
      <BrowserRouter>
      <Routes>
        <Route path='/updateemp/:eid' element={<Updateemp></Updateemp>}></Route>
        <Route path='/addemp' element={<AddEmployee></AddEmployee>}></Route>
        <Route path='/getemp' element={<GetEmployee></GetEmployee>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/Aboutus' element={<About></About>}></Route>
        <Route path='/Contactus' element={<Contactus></Contactus>}></Route>
        <Route path='/service' element={<Service></Service>}></Route>
        <Route path='/admindashboard' element={<Admindashbord></Admindashbord>}></Route>
        <Route path='/employeedashbord' element={<Employeedashbord></Employeedashbord>}></Route>
              </Routes>
     <LoginForm></LoginForm> 
     <Registerfrom></Registerfrom>
     
      </BrowserRouter>
  
    </div>
  );
}

export default App;