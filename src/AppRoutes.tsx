import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";

import Home from "./pages/Home";
import About from "./pages/About";
import Tasks from "./pages/Tasks";
import Collaborators from "./pages/Collaborators";
import Info from "./pages/Info";

const AppRoutes: React.FunctionComponent = () => {
  return (
    <>
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/collaborators" element={<Collaborators />} />
          <Route path="/info" element={<Info />} />
        </Routes>
      </Router>
    </>
  );
};

export default AppRoutes;
