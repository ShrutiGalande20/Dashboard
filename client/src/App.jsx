import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./layout/Header";
import Sidebar from "./layout/SIdebar";
import Dashborad from "./pages/Dashborad";
import Mba from "./pages/Mba";
import Total from "./pages/Total";
import Online from "./pages/Online";

const App = () => {
  return (
    <Router>
      <Header />
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div style={{ flex: 1, marginLeft:"50px", padding: "20px" }}>
          <Routes>
            <Route path="/" component={<Dashborad />} />
            <Route path="/online" component={<Online />} />
            <Route path="/total" component={<Total />} />
            <Route path="/mba" component={<Mba />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
