import { Outlet } from "react-router";
import Footer from "./views/layout/Footer";
import Sidebar from "./views/layout/Sidebar";

function App() {
  return (
    <>
      <div id="app">
        <Sidebar/>
        <div id="main">
          <header className="mb-3">
            <a href="#" className="burger-btn d-block d-xl-none">
              <i className="bi bi-justify fs-3"></i>
            </a>
          </header>
          <Outlet/>
         <Footer/>
        </div>
      </div>
    </>
  );
}

export default App;
