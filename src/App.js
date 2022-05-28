import "./assets/styles/reset.css"
import "./assets/styles/styles.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage"
import SignPage from "./components/SignPage";
import HabitsPage from "./components/HabitsPage";
import UserContext from "./context/UserContext";
import React from "react";

function App() {

  const [token, setToken] = React.useState("")
  const [image, setImage] = React.useState("")

  return (
    <UserContext.Provider value={{ token, setToken, image, setImage }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/cadastro" element={<SignPage />} />
          <Route path="/habits" element={<HabitsPage />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
