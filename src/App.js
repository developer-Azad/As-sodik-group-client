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
         <Route path="/updateHisab/:memberId" element={ <AddHisab/> }>
         </Route>
         <Route path="/details/:memberId" element={ <MemberDetails/> }>
         </Route>
         <Route path="/hisab/:memberId" element={ <MembersHisab/> }>
         </Route>
      </Routes>
      <Footer></Footer>
      </AuthProvider>
    </div>
  );
}

export default App;
