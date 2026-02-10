import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./styles/helpers/reset.scss";
import "./styles/helpers/variables.scss";
import "./styles/fonts.scss";
import "./styles/main.scss";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <BrowserRouter basename="/travel_world/">
            <App />
        </BrowserRouter>
    </StrictMode>
);
