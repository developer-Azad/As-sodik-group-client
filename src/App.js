import { Route, Router, Routes } from "react-router-dom";
import AddHisab from "./components/Admin/AddHisab/AddHisab";
import Home from "./components/Home/Home/Home";
import MemberHisab from "./components/Members/MemberHisab/MemberHisab";
import Navigation from "../src/components/Shared/Navigation/Navigation"
import Members from "./components/Members/Members/Members";
import AddMember from "./components/Admin/AddMember/AddMember";


function App() {
  return (

    <div>
      <Navigation></Navigation>
        <Routes>
         <Route path="/home" element={ <Home/> }>
         </Route>
         <Route exact path="/" element={ <Home/> }>
         </Route>
         <Route path="/addmember" element={ <AddMember/> }>
         </Route>
         <Route path="/member" element={ <Members/> }>
         </Route>
         <Route path="/updateHisab/:memberId" element={ <AddHisab/> }>
         </Route>
         <Route path="/hisab/:memberId" element={ <MemberHisab/> }>
         </Route>
      </Routes>
    </div>

  );
}

export default App;
