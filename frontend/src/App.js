import { Navbar } from './admin/Navbar.js';
import Register from './admin/user/Register.js';
import {Routes,Route,Navigate, BrowserRouter} from 'react-router-dom';
import { Login } from './admin/user/Login.js';
import { User } from './admin/user/User.js';
import { useContext } from "react";
import { AuthContext } from './context/AuthContext.js';

function App() {

    const ProtectedRoute = ({ children }) => {
    const { user } = useContext(AuthContext);

    if (!user) {
      return <Navigate to="/admin" />;
    }

    return children;
  };

  return (

    <div>
      <BrowserRouter>
        <Routes>
          {/* <Route exact path='/admin'> */}
          <Route exact path={'/admin'} element={<Login />}/>
          <Route exact path={'/reg'} element={<Register />} />
          <Route exact path = {'/user'} element={<User/>}/>
          {/* </Route> */}
        </Routes>
      </BrowserRouter>
    </div>
    // <div>
    //   <Navbar/>
    //   <Routes>
    //     <Route exact path={'/reg'} element={<Register />} />
    //     <Route exact path={'/admin'} element={<Login />} />
    //     <Route exact path = {'/user'} element={<User/>}/>
    //   </Routes>
    //  </div>
  
  );
}
export default App;
