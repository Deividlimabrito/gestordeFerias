import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import {
  Menu,
  X,
  Calendar,
  BarChart2,
  CheckSquare,
  AlertTriangle,
  Users,
  Building,
  Circle,
} from "lucide-react";

const SidebarLayout = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <div className="flex min-h-screen w-full bg-gray-100 font-sans">
      {/* --- HEADER MOBILE --- */}
      <div className="lg:hidden fixed top-0 left-0 w-full bg-[#0B1739] text-white p-4 flex justify-between items-center z-30 shadow-md">
        <div className="flex items-center gap-2 font-bold text-xl">
          <div className="bg-blue-500 p-1.5 rounded-lg">
            <Calendar size={20} className="text-white" />
          </div>
          CRONA
        </div>
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* --- OVERLAY MOBILE --- */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-black/50 z-20" onClick={closeMenu} />
      )}

      {/* --- MENU LATERAL (SIDEBAR) --- */}
      <aside
        className={`
        fixed top-0 left-0 h-full bg-[#0B1739] text-slate-300 z-30 flex flex-col transition-transform duration-300 ease-in-out
        lg:w-[260px] lg:translate-x-0
        w-[280px] ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}
      `}
      >
        {/* Logo */}
        <div className="flex items-center gap-3 p-6 pt-8 lg:pt-6">
          <div className="bg-blue-500 p-2 rounded-xl">
            <Calendar size={24} className="text-white" />
          </div>
          <span className="text-2xl font-bold text-white tracking-wide">CRONA</span>
        </div>

        {/* Perfil do Usuário */}
        <div className="mx-4 mt-2 p-3 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
          <div className="bg-blue-500 rounded-full w-10 h-10 flex items-center justify-center text-white font-bold text-sm">RC</div>
          <div className="flex flex-col">
            <span className="text-[10px] text-slate-400 font-semibold tracking-wider">ADMINISTRADOR</span>
            <span className="text-sm text-white font-medium">Rafael Costa</span>
          </div>
        </div>

        {/* Navegação */}
        <nav className="flex-1 overflow-y-auto mt-6 px-3 space-y-6 scrollbar-hide">
          {/* GESTÃO */}
          <div>
            <h3 className="px-3 text-xs font-semibold text-slate-500 mb-2 tracking-wider">GESTÃO</h3>
            <ul className="space-y-1">
              <li>
                <Link to="/dashboard" onClick={closeMenu} className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm hover:bg-white/5 transition-colors text-slate-300">
                  <BarChart2 size={18} className="text-indigo-400" />
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/dashboard/aprovacoes" onClick={closeMenu} className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm hover:bg-white/5 transition-colors text-slate-300">
                  <CheckSquare size={18} className="text-emerald-500" />
                  Aprovações
                </Link>
              </li>
              <li>
                <Link to="/dashboard/conflitos" onClick={closeMenu} className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm hover:bg-white/5 transition-colors text-slate-300">
                  <AlertTriangle size={18} className="text-amber-500" />
                  Conflitos
                </Link>
              </li>
            </ul>
          </div>

          {/* CADASTROS */}
          <div>
            <h3 className="px-3 text-xs font-semibold text-slate-500 mb-2 tracking-wider">CADASTROS</h3>
            <ul className="space-y-1">
              <li>
                <Link to="/dashboard/colaboradores" onClick={closeMenu} className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm hover:bg-white/5 transition-colors text-slate-300">
                  <Users size={18} className="text-indigo-400" />
                  Colaboradores
                </Link>
              </li>
              <li>
                <Link to="/dashboard/empresa" onClick={closeMenu} className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm hover:bg-white/5 transition-colors text-slate-300">
                  <Building size={18} className="text-slate-400" />
                  Empresa
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-white/5 mt-auto text-xs text-slate-500 flex items-center gap-2">
          <Circle size={8} className="text-emerald-500 fill-emerald-500" />
          TechCorp Brasil Ltda
        </div>
      </aside>

      {/* --- CONTEÚDO PRINCIPAL --- */}
      <main className="flex-1 min-h-screen lg:ml-[260px] pt-16 lg:pt-0 bg-gray-50">
        <div className="p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default SidebarLayout;
