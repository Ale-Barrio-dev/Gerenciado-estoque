import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./css/style.css";
import { StockContextProvider } from "./contexts/StockContext.jsx";

createRoot(document.getElementById("root")).render(
  <StockContextProvider>
    <App />
  </StockContextProvider>
);
