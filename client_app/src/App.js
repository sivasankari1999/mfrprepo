import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './frontend/layout/Header';
import Layout from './frontend/layout/Layout';
import { Route, Routes } from 'react-router';
import Home from './frontend/layout/Home/Home';
import Menu from './frontend/layout/Menu';
import OrderOnline from './frontend/layout/OrderOnline';
import More from './frontend/layout/More';
import AboutUs from './frontend/layout/AboutUs';
import ContactUs from './frontend/layout/ContactUs';
import Navbar from './frontend/layout/Navbar';
import Login from './frontend/layout/Login';
import Signup from './frontend/layout/Signup';




//import UseRefdemo from './useref/UseRefdemo';
//import Layout from './food_routing_demo/Layout';
//import Navbar from './router_demo/Navbar';
//import Layout from './router_demo/Layout';
//import Getemps from './axios/Getemps';
//import PostEmps from './axios/Post';
//import EmployeesOperations from './empsoperations_axios/EmployeeOpeartions';
//import EmployeeOperation from './multipleComponentEmployeeoperations/EmployeeOperations';
//import Axiosdemo from './axiosdemo/Axiosdemo';
//import Handson4 from './handson4/Handson4.js';
//import Todoapp from './todoapp/Todoapp';
//import Employee from './handson3/Employee';
//import Box from './componentlifecycles/Box';
//import Toggledemo from './componentlifecycles/Toggledemo';
//import Envvar from './environmentvariables/Envvar';
//import Hitcount from './hitcount/Hitcount';
//import Toggle from './toggle/Toggle';
//import ColorPicker from './colorpicker/ColorPicker';
//import Todoapp from './todoapp/Todoapp';

function App() {
  return (
    <div className="App">
      {/*<Todoapp></Todoapp>*/}
      {/*<Box></Box>*/}
      {/*<Toggledemo></Toggledemo>*/}
      {/*<Envvar></Envvar>*/}
      {/*<Hitcount></Hitcount>*/}
      {/*<Toggle></Toggle>*/}
      {/*<ColorPicker></ColorPicker>*/}
      {/*<Todoapp></Todoapp>*/}
      {/*<EmployeeOperation></EmployeeOperation>*/}
      {/*<Axiosdemo></Axiosdemo>*/}
      {/*<Getemps></Getemps>*/}
      {/*<PostEmps></PostEmps>*/}
      {/*<EmployeesOperations></EmployeesOperations>*/}
      {/*<Navbar></Navbar>*/}
      <Layout></Layout>
    
      {/*<Routes>

        <Route path="/" element={<Header />}></Route>

        <Route path="/login" element={<Login />}></Route>
        <Route path="/home" element={<Navbar />}></Route>
        <Route path="/Menu" element={<Menu />}></Route>
        <Route path="/OrderOnline" element={<OrderOnline />}></Route>
        <Route path="/More" element={<More />}></Route>
        <Route path="/aboutus" element={<AboutUs />}></Route>
        <Route path="/contactUs" element={<ContactUs />}></Route>
        <Route path="/home" element={<Home />}></Route>


      </Routes>*/}

      {/*<UseRefdemo></UseRefdemo>*/}


    </div>
  );
}

export default App;
