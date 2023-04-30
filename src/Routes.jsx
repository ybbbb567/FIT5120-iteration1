import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "pages/NotFound";
const SMSDetector = React.lazy(() => import("pages/SMSDetector"));
const BadResultPage = React.lazy(() => import("pages/BadResultPage"));
const Homepage = React.lazy(() => import("pages/Homepage"));
const SearchPage = React.lazy(() => import("pages/SearchPage"));
const MapPage = React.lazy(() => import("pages/MapPage"));
const QuizPage = React.lazy(() => import("pages/QuizPage"));

const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/searchpage" element={<SearchPage />} />
          <Route path="/badresultpage" element={<BadResultPage />} />
          <Route path="/smsdetector" element={<SMSDetector />} />
          <Route path="/quiz" element={<QuizPage />} />

        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
