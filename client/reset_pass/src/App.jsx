import "./App.css";
import ForgotPassword from "./components/ForgotPassword";
import Header from "./components/Header";
import Login from "./components/Login";
import Register from "./components/Register";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="//forgot-password" element={<ForgotPassword />} />
      </Routes>
    </div>
  );
}

export default App;
