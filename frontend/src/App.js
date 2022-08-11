import Register from "./admin/user/Register.js";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import { Login } from "./admin/user/Login.js";
import { User } from "./admin/user/User.js";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext.js";
import { Home } from "./client/Home.js";
import { InnovationAdd } from "./admin/innovation/InnovationAdd.js";
import { UserUpdate } from "./admin/user/UserUpdate.js";

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
          <Route exact path={"/admin"} element={<Login />} />
          {/* <Route exact path="/logout" element={<Login/>} /> */}
          <Route exact path={"/reg"} element={<ProtectedRoute><Register /></ProtectedRoute>} />
          <Route exact path={"/"} element={<Home />} />
          <Route
            exact
            path={"/user"}
            element={
              <ProtectedRoute>
                <User />
              </ProtectedRoute>
            }
          />
          <Route exact path={"/updateuser/:id"} element={<ProtectedRoute><UserUpdate /></ProtectedRoute>} />
          <Route exact path={"/innovation"} element={<ProtectedRoute><InnovationAdd /></ProtectedRoute>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
