import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import SidebarLayout from "./components/Sidebar";
import ForgotPassword from "./components/ForgotPassword";

function App() {
  return (
    <Router>
      <Routes>
        {/* Quando abrir o site, vai direto para o Login */}
        <Route path="/" element={<Login />} />
        
        {/* 2. Nova rota para recuperação de senha */}
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
        
        {/* Quando o login for feito, ele vai para cá */}
        <Route path="/dashboard" element={<SidebarLayout />} />

        {/* Se digitar qualquer outra coisa, volta para o Login */}
        {/* IMPORTANTE: Esta rota deve ser sempre a ÚLTIMA */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;