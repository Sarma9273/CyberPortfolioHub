import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { ThemeProvider } from "next-themes";

createRoot(document.getElementById("root")!).render(
  <ThemeProvider attribute="data-theme" defaultTheme="dark" enableSystem>
    <App />
  </ThemeProvider>
);
