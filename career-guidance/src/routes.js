import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CareerExploration from './pages/CareerExploration';
import MentorProgram from './pages/MentorProgram';
import CareerResources from './pages/CareerResources';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/career-exploration" element={<CareerExploration />} />
        <Route path="/mentor-program" element={<MentorProgram />} />
        <Route path="/career-resources" element={<CareerResources />} />
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
