import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import SidebarLayout from "./components/Sidebar";
import Colaboradores from "./pages/Colaboradores";
import Empresa from "./pages/Empresa";

function App() {
  return (
    <Router>
      <Routes>

        {/* LOGIN */}
        <Route path="/" element={<Login />} />

        {/* ESQUECI SENHA */}
        <Route path="/ForgotPassword" element={<ForgotPassword />} />

        {/* DASHBOARD COM SIDEBAR */}
        <Route path="/dashboard" element={<SidebarLayout />}>

          <Route index element={<h1>Dashboard</h1>} />

          <Route path="colaboradores" element={<Colaboradores />} />
          <Route path="empresa" element={<Empresa />} />

          {/* Futuras páginas */}
          {/* <Route path="aprovacoes" element={<Aprovacoes />} /> */}
          {/* <Route path="conflitos" element={<Conflitos />} /> */}

        </Route>

        <Route path="*" element={<Navigate to="/" />} />

      </Routes>
    </Router>
  );
}

export default App;