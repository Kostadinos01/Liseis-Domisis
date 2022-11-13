import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";

import Home from "./pages/Home";
import Team from "./pages/Team";
import Tasks from "./pages/Tasks";
import Chats from "./pages/Chats";
import Info from "./pages/Info";

const AppRoutes: React.FunctionComponent = () => {
  return (
    <>
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/chats" element={<Chats />} />
          <Route path="/Info" element={<Info />} />
        </Routes>
      </Router>
    </>
  );
};

export default AppRoutes;
