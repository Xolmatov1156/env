import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { SavedItemsProvider } from "./Context/Context.jsx";

createRoot(document.getElementById("root")).render(
    <SavedItemsProvider>
     <BrowserRouter>
        <App />
     </BrowserRouter>
    </SavedItemsProvider>
);
