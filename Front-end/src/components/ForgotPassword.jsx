import React, { useState } from "react";
import { Mail, ArrowLeft, Send } from "lucide-react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // No futuro, aqui você chamará sua API para enviar o e-mail
    console.log("Solicitação de recuperação para:", email);
    alert("Se o e-mail existir em nossa base, você receberá as instruções.");
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-100 font-sans p-4">
      <div className="w-full max-w-[400px] bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
        
        {/* Topo informativo */}
        <div className="bg-[#0B1739] p-8 text-center">
          <h1 className="text-2xl font-bold text-white tracking-tight">Recuperar Senha</h1>
          <p className="text-slate-400 text-sm mt-2">
            Insira seu e-mail corporativo para receber as instruções de redefinição.
          </p>
        </div>

        <div className="p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase mb-2">
                E-mail Cadastrado
              </label>
              <div className="relative group">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                <input
                  type="email"
                  required
                  placeholder="exemplo@empresa.com"
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#0B1739] hover:bg-[#152550] text-white font-bold py-3 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 group"
            >
              Enviar Instruções
              <Send size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          {/* Link para Voltar */}
          <div className="mt-8 pt-6 border-t border-gray-100 text-center">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
            >
              <ArrowLeft size={16} />
              Voltar para o Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;