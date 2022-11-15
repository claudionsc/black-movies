import { Outlet } from "react-router-dom";
import Navbar from './components/navbar/Navbar'
import Home from "./components/pages/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Outlet />
    </div>
  );
}

export default App;
