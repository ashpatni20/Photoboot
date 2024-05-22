import Footer from "./components/Footer";
// import Home from "./components/Home";
import Nav from "./components/Nav";
import { Outlet } from "react-router-dom";
// import PrivateRoute from "./utils/PrivateRoute";
const App = () =>{
  return(
    <div>
      <div className="fixed w-full z-50">
      <Nav/>
      
      </div>
      <Outlet/>
      <Footer/>
     
    </div>
  )
}
export default App;