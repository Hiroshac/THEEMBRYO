import { Navbar } from './admin/Navbar.js';
import Register from './admin/Register.js';
import {Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
          {/* <Route exact path = {'/'} element={<Navbar/>}/> */}
          <Route exact path = {'/reg'} element={<Register/>}/>
      </Routes>
     </div>
  
  );
}
export default App;
