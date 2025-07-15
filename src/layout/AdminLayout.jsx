import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import ContentPanel from "../components/ContentPanel";
import "../assets/AdminLayout.css";
// import "../assets/Styles.css";

const AdminLayout = () => {
  return (
    <div className="adminLayoutDiv">
      {/* AdminLayout */}
      <Header />
      <div className="mainSectionDiv">
        <Sidebar />
        <ContentPanel />
      </div>
      <Footer />
    </div>
  );
};
export default AdminLayout;
