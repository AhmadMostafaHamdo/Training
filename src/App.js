import { HashRouter,Route, Routes } from 'react-router-dom';
import Init from './pages/website/Init'clear

export default function App() {
  return (
   <div>
       <HashRouter>
           <Routes>
                <Route path="/" element={<Init/>} />
           </Routes>
       </HashRouter>
   </div>
  );
}