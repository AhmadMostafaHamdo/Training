import {Route, Routes } from 'react-router-dom';
import Init from './pages/website/Init'
import Login from './pages/website/auth/Login';
import Register from './pages/website/auth/Register';
import Verfiy from './pages/website/Verfiy';
import Logout from './pages/website/Logout';

export default function App() {
  return (
   <div>
           <Routes>
                <Route path="/Training" element={<Init/>} >
                  {/* <Route path="register" element={<Register/>}/> */}
                  <Route path="login" element={<Login/>}/>
                  {/* <Route path="logout" element={<Logout/>}/> */}
                </Route>
                {/* <Route path='/Training/verfiy' element={<Verfiy/>} /> */}
           </Routes>
   </div>
  );
}