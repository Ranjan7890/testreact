import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import Signin from "./Pages/Signin";
import Offers from "./Pages/Offers";
import Signup from "./Pages/Signup";
import ForgotPassword from "./Pages/ForgotPassword";
function App() {
  return (
    <div >
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/Sign-in" element={<Signin/>}/>
          <Route path="/sign-up" element={<Signup/>}/>
          <Route path="/offers" element={<Offers/>}/>
          <Route path="/forgot-password" element={<ForgotPassword/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
