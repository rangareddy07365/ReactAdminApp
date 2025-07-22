import React, { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import ContentPanel from "../components/ContentPanel";
import "../assets/AdminLayout.css";

const AdminLayout = () => {

const [isDark, SetDark] = useState(false);

const toggleTheme = () => {
  SetDark(!isDark);
}

  return (
    <div className={`adminLayoutDiv ${isDark ? 'dark-mode' : ''}`}>
      <Header toggleTheme = {toggleTheme} isDark = {isDark}/>
      <div className="mainSectionDiv">
        <Sidebar />
        <ContentPanel />
      </div>
      <Footer />
    </div>
  );
};
export default AdminLayout;
