import React from "react";
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
import { InnovationDetails } from "./client/product and solution/InnovationDetails.js";
import { AddUnivaersity } from "./admin/university/AddUnivaersity.js";
import { DisplayUniversity } from "./admin/university/DisplayUniversity.js";
import { UpdateUnivaersity } from "./admin/university/UpdateUnivaersity.js";
import { University } from "./client/colabarations/University.js";
import { IndustryDisplay } from "./admin/industry/IndustryDisplay.js";
import { IndustryAdd } from "./admin/industry/IndustryAdd.js";
import { IndustryUpdate } from "./admin/industry/IndustryUpdate.js";
import { OngoingAdd } from "./admin/ongoingprograms/OngingAdd.js";
import { OngoingDisplay } from "./admin/ongoingprograms/OngoingDisplay.js";
import { Industry } from "./client/colabarations/Industry.js";
import { Ongoing } from "./client/colabarations/Ongoing.js";
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
          <Route exact path={"/Auniversity"} element={<><DisplayUniversity /></>} />
          <Route exact path={"/universityadd"} element={<><AddUnivaersity /></>} />
          <Route exact path={"/updateuniversity/:id"} element={<><UpdateUnivaersity /></>} />
          <Route exact path={"/Aindustry"} element={<><IndustryDisplay /></>} />
          <Route exact path={"/industryadd"} element={<><IndustryAdd /></>} />
          <Route exact path={"/updateindustry/:id"} element={<>< IndustryUpdate/></>} />
          <Route exact path={"/Aongoing"} element={<><OngoingDisplay /></>} />
          <Route exact path={"/ongoingadd"} element={<><OngoingAdd/></>} />
          <Route exact path={"/updateindustry/:id"} element={<>< IndustryUpdate/></>} />

          {/* Client Route */}
          <Route exact path={"/"} element={<Home />} />
          {/* <Route exact path={"/"} element={<Homee/>} /> */}
          <Route exact path={"/innovation"} element={<Innovation/>} />
          <Route exact path={"/innovationdetails/:id"} element={<InnovationDetails/>} />
          <Route exact path={"/university"} element={<University/>} />
          <Route exact path={"/industry"} element={<Industry/>} />
          <Route exact path={"/ongoing"} element={<Ongoing/>} />
         
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
