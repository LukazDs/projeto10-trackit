import "./assets/styles/reset.css"
import "./assets/styles/styles.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage"
import SignPage from "./components/SignPage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/cadastro" element={<SignPage />} />
      </Routes>
    </BrowserRouter>
    );
}

export default App;
