import "./index.css";
import React from "react";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { initializeJobs } from "./services/db/jobsDb";
import { initializeCandidates } from "./services/db/candidatesDb";
import { initializeAssessments } from "./services/db/assessmentsDb";

if (import.meta.env.MODE === "development") {
  import("./services/mocks/browser").then(({ worker }) => {
    worker
      .start({
        onUnhandledRequest: "warn",
      })
      .then(() => {
        console.log("MSW started");
      });
  });
}

initializeJobs();
initializeCandidates();
initializeAssessments();

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);