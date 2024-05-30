import SignUp from "./pages/signup/SignUp";
import { Navigate, Route, Routes, useLocation } from "react-router";
import "./App.css";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext";
import Landing from "./pages/landing/Landing";

function App() {
  const { authUser } = useAuthContext();
  const location = useLocation();
  const isRootPath = location.pathname === "/";

  return (
    <div className={`min-h-screen ${isRootPath ? "flex flex-col" : "p-4 h-screen flex items-center justify-center"}`}>
      <Routes>
        <Route
          path="/"
          element={authUser ? <Navigate to="/home" /> : <Landing />}
        />
        <Route
          path="/home"
          element={authUser ? <Home /> : <Navigate to="/" />}
        />
        <Route
          path="/signup"
          element={authUser ? <Navigate to="/home" /> : <SignUp />}
        />
        <Route
          path="/login"
          element={authUser ? <Navigate to="/home" /> : <Login />}
        />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
