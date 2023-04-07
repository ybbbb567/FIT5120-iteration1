import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Notification = React.lazy(() => import("pages/Notification"));
const BadResultPage = React.lazy(() => import("pages/BadResultPage"));
const Homepage = React.lazy(() => import("pages/Homepage"));
const SearchPage = React.lazy(() => import("pages/SearchPage"));
const ResultPage = React.lazy(() => import("pages/ResultPage"));
const QuizPage = React.lazy(() => import("pages/QuizPage"));

const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/resultpage" element={<ResultPage />} />
          <Route path="/searchpage" element={<SearchPage />} />
          <Route path="/badresultpage" element={<BadResultPage />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/dhiwise-dashboard" element={<Home />} />
          <Route path="/quiz" element={<QuizPage />} />

        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
