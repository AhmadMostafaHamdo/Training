import { HashRouter,Route, Routes } from 'react-router-dom';
import Init from './pages/website/Init'
import Login from './pages/website/auth/Login';
import Register from './pages/website/auth/Register';

export default function App() {
  return (
   <div>
           <Routes>
                <Route path="/Training" element={<Init/>} >
                  <Route path="login" element={<Login/>}/>
                  <Route path="register" element={<Register/>}/>
                </Route>
           </Routes>
   </div>
  );
}