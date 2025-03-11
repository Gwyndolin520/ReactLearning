// src/App.js
import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";

const App = () => {
  const [user, setUser] = useState(null);

  const handleLogin = (user) => {
    setUser(user);
  };

  return (
    <BrowserRouter>
      <AppRoutes user={user} onLogin={handleLogin} />
    </BrowserRouter>
  );
};

export default App;
