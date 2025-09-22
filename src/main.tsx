<<<<<<< HEAD
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { initializeJobs } from "./services/db/jobsDb";
import { initializeCandidates } from "./services/db/candidatesDb";
import { initializeAssessments } from "./services/db/assessmentsDb";
import { Toaster } from "react-hot-toast";
=======
import { initializeCandidates } from "./services/db/candidatesDb";
import { initializeAssessments } from "./services/db/assessmentsDb";
>>>>>>> 7738358021bb403ddbeb9846b44af15dad35bff0

const startApp = () => {
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <BrowserRouter>
        <App />
<<<<<<< HEAD
        <Toaster />
=======
>>>>>>> 7738358021bb403ddbeb9846b44af15dad35bff0
      </BrowserRouter>
    </StrictMode>
  );
};

if (process.env.NODE_ENV === "development") {
<<<<<<< HEAD
=======
  import("./services/mocks/browser").then(({ worker }) => {
    worker
      .start({
        onUnhandledRequest: "warn",
      })
      .then(() => {
        console.log("MSW started");
      });
  });
>>>>>>> 7738358021bb403ddbeb9846b44af15dad35bff0
  // console.log("Starting MSW in development mode");
  import("./services/mocks/browser")
    .then(({ worker }) => {
      // console.log("MSW module loaded, starting worker");
      worker
        .start({
          onUnhandledRequest: "warn",
        })
        .then(() => {
          // console.log("MSW started successfully");
          // Initialize databases after MSW is ready
          initializeJobs();
          initializeCandidates();
          initializeAssessments();
          // Start the app after MSW is ready
          startApp();
        })
        .catch((error) => console.error("MSW failed to start:", error));
    })
<<<<<<< HEAD
    .catch((error) => {
      console.error("Failed to import MSW:", error);
      // Fallback: start app without MSW if import fails
      initializeJobs();
      initializeCandidates();
      initializeAssessments();
      startApp();
    });
=======
    .catch((error) => console.error("Failed to import MSW:", error));
>>>>>>> 7738358021bb403ddbeb9846b44af15dad35bff0
} else {
  // In production, initialize databases immediately and start app
  initializeJobs();
  initializeCandidates();
  initializeAssessments();
  startApp();
}
<<<<<<< HEAD
=======

initializeJobs();
initializeCandidates();
initializeAssessments();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
>>>>>>> 7738358021bb403ddbeb9846b44af15dad35bff0
