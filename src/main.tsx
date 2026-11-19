import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { MotionConfig } from "motion/react";
import "@fontsource/noto-sans-jp/400.css";
import "@fontsource/noto-serif-jp/400.css";
import "./styles/global.css";
import "./styles/i18n.css";
import App from "./App";
import { LanguageProvider } from "./components/LanguageProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <MotionConfig reducedMotion="user">
        <LanguageProvider>
          <App />
        </LanguageProvider>
      </MotionConfig>
    </BrowserRouter>
  </React.StrictMode>,
);
