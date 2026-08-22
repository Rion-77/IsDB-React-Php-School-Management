import { Outlet } from "react-router";
import Sidebar from "./views/layout/Sidebar";

function App() {

  

  return (
    <>
      <div id="app">
        <Sidebar/>
        <div id="main" className="pb-1">
          <header className="mb-3">
            <a href="#" className="burger-btn d-block d-xl-none">
              <i className="bi bi-justify fs-3"></i>
            </a>
          </header>
          <Outlet/>
        </div>
      </div>
    </>
  );
}

export default App;
