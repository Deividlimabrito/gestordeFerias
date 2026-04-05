import React, { useState } from "react";
import { Mail, Lock, Eye, EyeOff, Calendar, ArrowRight } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });

    const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você faz a validação com o banco de dados depois
    console.log("Logado com sucesso!");
    
    // Esse comando faz a "mágica" de trocar a tela sem dar refresh
    navigate("/dashboard");
    };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-100 font-sans p-4">
      {/* Card de Login */}
      <div className="w-full max-w-[400px] bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
        
        {/* Topo / Logo */}
        <div className="bg-[#0B1739] p-8 text-center">
          <div className="inline-flex bg-blue-500 p-3 rounded-xl mb-4 shadow-lg shadow-blue-500/20">
            <Calendar size={32} className="text-white" />
          </div>
          <h1 className="text-2xl font-bold text-white tracking-tight">CRONA</h1>
          <p className="text-slate-400 text-sm mt-1 font-medium">Gestão de Férias</p>
        </div>

        {/* Formulário */}
        <div className="p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            
            {/* Campo Email */}
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                E-mail Corporativo
              </label>
              <div className="relative group">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors" size={20} />
                <input
                  type="email"
                  required
                  placeholder="exemplo@empresa.com"
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>

            {/* Campo Senha */}
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Senha
                </label>
              </div>
              <div className="relative group">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors" size={20} />
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder="••••••••"
                  className="w-full pl-10 pr-12 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Botão Entrar */}
            <button
              type="submit"
              className="w-full bg-[#0B1739] hover:bg-[#152550] text-white font-bold py-3 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 group"
            >
              Acessar Painel
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
          {/* Rodapé do Login */}
          <div className="mt-8 pt-6 border-t border-gray-100 text-center text-sm text-slate-500">
            <Link 
              to="/ForgotPassword" 
              className="font-bold text-blue-600 hover:text-blue-700 transition-colors"
            >
              Esqueceu a senha?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;