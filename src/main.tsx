import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

// import { App } from "./0_setup/App";  // with Stage, no light, no shadows enabled
// import { App } from "./1_setup/App"; // shadows enabled, with lights without Stage
// -----------------------------------------------------------
// import { App } from "./2_setup/App";
// import { App } from "./3_text/App";
// import { App } from "./4_matcap/App";
import { App } from "./5_donuts/App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
