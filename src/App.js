import { Route, Routes } from "react-router-dom";
import AddHisab from "./components/Admin/AddHisab/AddHisab";
import Home from "./components/Home/Home/Home";
import Navigation from "../src/components/Shared/Navigation/Navigation"
import Members from "./components/Members/Members/Members";
import AddMember from "./components/Admin/AddMember/AddMember";
import Footer from "./components/Shared/Footer/Footer";
import MemberDetails from "./components/Members/MemberDetails/MemberDetails";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import Login from "./components/Login/Login/Login";
import Register from './components/Login/Register/Register';
import PrivateRoute from "./components/Login/PrivateRoute/PrivateRoute";
import MembersHisab from "./components/Members/MembersHisab/MembersHisab";
import MakeAdmin from "./components/Admin/MakeAdmin/MakeAdmin";
import AdminRoute from "./components/Login/AdminRoute/AdminRoute";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import DashboardHome from "./components/Dashboard/DashboardHome/DashboardHome";
import MembersShow from "./components/Members/Member for admin/MembersShow";

function App() {
  return (
    <div>
      <AuthProvider>
      <Navigation></Navigation>
        <Routes>
         <Route path="/home" element={ <Home/> }>
         </Route>
         <Route exact path="/" element={ <Home/> }>
         </Route>
         {/* <Route exact path="/aboutus" element={ <AboutUs/> }> */}
         {/* </Route> */}
         <Route exact path="/makeAdmin" element={ <AdminRoute>
          <MakeAdmin/>
         </AdminRoute> }>
         </Route>
         <Route exact path="/login" element={ <Login/> }>
         </Route>
         <Route exact path="/register" element={ <Register/> }>
         </Route>
        
         <Route path="/addmember" element={ <AdminRoute>
          <AddMember/>
         </AdminRoute> }>
         </Route>
         <Route path="/member" element={ <Members/> }>
         </Route>
         <Route path="/updateHisab" element={ <AdminRoute>
          <AddHisab/>
         </AdminRoute> }>
         </Route>
         <Route path="/dashboard" element={ <AdminRoute>
          <Dashboard/>
         </AdminRoute> }>
         </Route>
         <Route path="/membersShow" element={ <AdminRoute>
          <MembersShow/>
          </AdminRoute>}>
          </Route>
         <Route path="/userDashboard" element={ <PrivateRoute>
          <Dashboard/>
         </PrivateRoute> }>
           </Route>
         <Route path="/dboardHome" element={ <AdminRoute>
          <DashboardHome/>
         </AdminRoute> }>
         </Route>
         <Route path="/details/:memberId" element={ <MemberDetails/> }>
         </Route>
         <Route path="/hisab/:memberId" element={ <PrivateRoute>
          <MembersHisab/>
         </PrivateRoute> }>
         </Route>
      </Routes>
      <Footer></Footer>
      </AuthProvider>
    </div>
  );
}

export default App;
