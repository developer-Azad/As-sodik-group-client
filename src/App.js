import { Route, Router, Routes } from "react-router-dom";
import Home from "./components/Home/Home/Home";
import MemberHisab from "./components/Members/MemberHisab/MemberHisab";

import Members from "./components/Members/Members/Members";


function App() {
  return (

      <Routes>
         <Route path="/home" element={ <Home/> }>
         </Route>
         <Route exact path="/" element={ <Home/> }>
         </Route>
         <Route path="/members" element={ <Members/> }>
         </Route>
         <Route path="/hisab/:memberId" element={ <MemberHisab/> }>
         </Route>
      </Routes>

  );
}

export default App;
