import RoutesPage from "./views/RoutesPage";
import "./assets/css/main.css";
import "./assets/css/bootstrap.css";
import "./assets/css/color.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <ToastContainer />
      <RoutesPage />
    </>
  );
}

export default App;
