import Register from "./admin/user/Register.js";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import { Login } from "./admin/user/Login.js";
import { User } from "./admin/user/User.js";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext.js";
import { Home } from "./client/Home.js";
import { InnovationAdd } from "./admin/innovation/InnovationAdd.js";
import { InnovationDisplay } from "./admin/innovation/InnovationDissplay";
import { UserUpdate } from "./admin/user/UserUpdate.js";
import { InnovationUpdate } from "./admin/innovation/InnovationUpdate.js";
import { Innovation } from "./client/product and solution/Innovation.js";
// import { Homee} from './client/home/Home.js'

function App() {
  //protect Routes for admin side
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

          {/* Admin Route */}
          <Route exact path={"/admin"} element={<Login />} />
          <Route exact path={"/reg"} element={<Register />} />
          <Route exact path={"/user"} element={<><User /></>}/>
          <Route exact path={"/updateuser/:id"} element={<><UserUpdate /></>} />
          <Route exact path={"/Ainnovation"} element={<><InnovationDisplay /></>}/>
          <Route exact path={"/innovationadd"} element={<><InnovationAdd /></>} />
          <Route exact path={"/updateinnovation/:id"} element={<><InnovationUpdate /></>} />

          {/* Client Route */}
          <Route exact path={"/"} element={<Home />} />
          {/* <Route exact path={"/"} element={<Homee/>} /> */}
          <Route exact path={"/innovation"} element={<Innovation/>} />
         
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
