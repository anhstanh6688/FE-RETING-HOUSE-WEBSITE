import Navbar from "./redux/components/Navbar/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AppRoutes from "./redux/routes/AppRoutes";
import "./App.scss";

function App() {
  return (
    <Router>
      <div className="app-header">
        <Navbar />
      </div>
      <div className="app-container">
        <AppRoutes />
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </Router>
  );
}

export default App;
