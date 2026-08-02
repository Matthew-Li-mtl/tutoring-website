
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from "./App";
//import { RootSlashFix } from "./RootSlashFix"

const root = document.getElementById("root") as HTMLElement;

ReactDOM.createRoot(root).render(
  
  <BrowserRouter basename={import.meta.env.BASE_URL}>  
  
      <App />
  </BrowserRouter>,
  
);
