import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

// import { App } from "./0_setup/App";  // with Stage, no light, no shadows enabled
// import { App } from "./1_setup/App"; // shadows enabled, with lights without Stage
// -----------------------------------------------------------
// import { App } from "./2_setup/App";
// import { App } from "./3_text/App";
// import { App } from "./4_matcap/App";
// import { App } from "./5_donuts/App";
// import { App } from "./6_optimizations_hacky/App";
// import { App } from "./7_optimizations_better/App";
// import { App } from "./8_accessing_meshes/App";
import { App } from "./9_accessing_meshes_better_solution/App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
