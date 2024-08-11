import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./layout/Header";
import Sidebar from "./layout/SIdebar";
import Dashborad from "./pages/Dashborad";
import Mba from "./pages/Mba";
import Total from "./pages/Total";
import Online from "./pages/Online";
import Engineering from "./pages/Engineering";
import Login from "./componets/Login";
import Register from "./componets/Register";

const App = () => {
  return (
    <Router>
      <Header />
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div style={{ height:"50rem",  width:"100%",marginTop:"20px" ,marginLeft:"40px", padding: "20px" , color:"black" }}>
          <Routes>
            <Route path="/" element={<Dashborad />} />
            <Route path="/online" element={<Online />} />
            <Route path="/total" element={<Total />} />
            <Route path="/mba" element={<Mba />} />
            <Route path="/eng" element={<Engineering />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/online" element={<Online />} />

          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
