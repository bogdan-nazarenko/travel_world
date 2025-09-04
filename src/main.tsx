import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/helpers/reset.scss";
import "./styles/helpers/vars.scss";
import "./styles/fonts.scss";
import "./styles/main.scss";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <App />
    </StrictMode>
);
