import "./index.css";

import { LinearProgress, ThemeProvider } from "@mui/material";
import React, { Suspense } from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";

import { theme } from "./assets/theme/theme";
import ResultPage from "./pages/ResultPage";

import i18n from "./utils/i18n.js"; //DO NOT TOUCH THIS!!!

const LandingPage = React.lazy(() => import("@pages/LandingPage"));
const QuizPage = React.lazy(() => import("@pages/QuizPage"));
const NoPage = React.lazy(() => import("@pages/NoPage"));

const App = () => {
  return (
    <Suspense
      fallback={
        <div>
          <LinearProgress />
        </div>
      }
    >
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Outlet />
                </>
              }
            >
              <Route index element={<LandingPage />} />
              <Route path="/quiz" element={<QuizPage />} />
              <Route path="/results" element={<ResultPage />} />
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </Suspense>
  );
};

export default App;
