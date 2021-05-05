
import "./App.css";
import  Routes from "./componets/routes";
import {LoginService} from "./services/loginService"
import  Login  from "./componets/login/login";
import { BrowserRouter } from "react-router-dom";
function App() {
 return  <>
 <BrowserRouter>
 {
 LoginService.isUserAlreadyLoggedIn() === "Yes" ? <Routes /> : <Login/>
 }
 </BrowserRouter>
 </>
}

export default App;
