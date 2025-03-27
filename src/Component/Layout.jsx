import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Header from "./header";
import '../assets/Css/Layout.css'
const Layout = () => {
  return (
    <div className="layout-container">
      <header className="header">
        <Header />
      </header>
      <div className="main-content">
        <aside className="navbar">
          <Navbar />
        </aside>
        <section className="page-content">
          <Outlet />
        </section>
      </div>
    </div>
  );
};

export default Layout;
