import React, { useState } from "react";
import { Users, Plus, Pencil, Trash2, User, X, Info, UserPlus } from "lucide-react";

const colaboradoresIniciais = [
  {
    id: 1,
    nome: "Administrador Crona",
    iniciais: "AC",
    email: "adm@teste.com",
    perfil: "Admin",
    departamento: "RH",
    admissao: "2020-01-01",
    gestor: "— Nenhum —",
    cargo: "Diretor",
    diasDisponiveis: 210,
  },
];

// ── MODAL ──────────────────────────────────────────────────────────────────────
const ModalColaborador = ({ colaborador, onClose, onSave }) => {
  const isEdicao = !!colaborador?.id;
  const [form, setForm] = useState(
    colaborador || {
      nome: "",
      email: "",
      senha: "",
      perfil: "Colaborador",
      departamento: "Engenharia",
      admissao: "",
      gestor: "— Nenhum —",
      cargo: "",
      diasDisponiveis: 30,
    }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    if (!form.nome || !form.email) {
      alert("Preencha os campos obrigatórios");
      return;
    }
    onSave(form);
  };

  return (
    <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl overflow-hidden">

        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <div className="flex items-center gap-3 text-[#0B1739]">
            <User size={20} />
            <h2 className="text-lg font-bold">{isEdicao ? "Editar Colaborador" : "Novo Colaborador"}</h2>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg text-gray-400 transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="p-8 space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-left">

            {/* Nome + Email */}
            <div className="space-y-1.5">
              <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Nome Completo *</label>
              <input name="nome" value={form.nome} onChange={handleChange} type="text" placeholder="Nome Sobrenome" className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:border-blue-500 outline-none" />
            </div>
            <div className="space-y-1.5">
              <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">E-mail de Acesso *</label>
              <input name="email" value={form.email} onChange={handleChange} type="email" placeholder="email@empresa.com" className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:border-blue-500 outline-none" />
            </div>

            {/* Senha + Perfil */}
            <div className="space-y-1.5">
              <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Senha de Acesso *</label>
              <input name="senha" value={form.senha || ""} onChange={handleChange} type="password" placeholder="Senha inicial" className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:border-blue-500 outline-none" />
            </div>
            <div className="space-y-1.5">
              <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Perfil *</label>
              <select name="perfil" value={form.perfil} onChange={handleChange} className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm outline-none cursor-pointer">
                <option>Colaborador</option>
                <option>Gestor</option>
                <option>Admin</option>
              </select>
            </div>

            {/* Departamento + Gestor */}
            <div className="space-y-1.5">
              <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Departamento</label>
              <select name="departamento" value={form.departamento} onChange={handleChange} className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm outline-none cursor-pointer">
                <option>Engenharia</option>
                <option>RH</option>
                <option>Comercial</option>
              </select>
            </div>
            <div className="space-y-1.5">
              <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Gestor Responsável</label>
              <input type="text" name="gestor" value={form.gestor === "— Nenhum —" ? "" : form.gestor} onChange={handleChange} placeholder="Digite o nome do gestor" className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:border-blue-500 outline-none" />
            </div>

            {/* Admissão + Cargo */}
            <div className="space-y-1.5">
              <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Data de Admissão *</label>
              <input name="admissao" value={form.admissao} onChange={handleChange} type="date" className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm outline-none text-slate-500" />
            </div>
            <div className="space-y-1.5">
              <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Cargo</label>
              <input name="cargo" value={form.cargo} onChange={handleChange} type="text" placeholder="Ex: Desenvolvedor Sênior" className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm outline-none" />
            </div>

          </div>

          {/* Info box */}
          <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 flex gap-3 text-left">
            <div className="bg-blue-500 p-1.5 rounded-lg h-fit text-white shrink-0"><Info size={15} /></div>
            <div>
              <h4 className="text-sm font-bold text-blue-900">Acesso ao sistema</h4>
              <p className="text-xs text-blue-700 leading-relaxed mt-0.5">
                O colaborador poderá fazer login com o e-mail e senha definidos. Os períodos aquisitivos serão calculados automaticamente pela data de admissão.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-100 flex justify-end gap-3 bg-gray-50/50">
          <button onClick={onClose} className="px-6 py-2.5 rounded-xl border border-gray-200 bg-white text-gray-600 text-sm font-semibold hover:bg-gray-50 transition-all">Cancelar</button>
          <button onClick={handleSubmit} className="px-6 py-2.5 rounded-xl bg-[#2563EB] text-white text-sm font-semibold hover:bg-blue-700 transition-all flex items-center gap-2 shadow-lg shadow-blue-500/30">
            <UserPlus size={16} /> {isEdicao ? "Salvar" : "Cadastrar"}
          </button>
        </div>
      </div>
    </div>
  );
};

// ── BADGE DE PERFIL ────────────────────────────────────────────────────────────
const PerfilBadge = ({ perfil }) => {
  const estilos = {
    Admin:       "text-red-500 font-bold",
    Gestor:      "text-blue-600 font-bold",
    Colaborador: "text-slate-600 font-bold",
  };
  return (
    <span className={`text-sm ${estilos[perfil] || "text-slate-600 font-bold"}`}>
      {perfil}
    </span>
  );
};

// ── FORMATA DATA ───────────────────────────────────────────────────────────────
const formatarData = (dateStr) => {
  if (!dateStr) return "—";
  const [ano, mes, dia] = dateStr.split("-");
  return `${dia}/${mes}/${ano}`;
};

// ── TELA PRINCIPAL ─────────────────────────────────────────────────────────────
const Colaboradores = () => {
  const [colaboradores, setColaboradores] = useState(colaboradoresIniciais);
  const [modalAberto, setModalAberto] = useState(false);
  const [colaboradorEditando, setColaboradorEditando] = useState(null);

  const abrirNovoModal = () => { setColaboradorEditando(null); setModalAberto(true); };
  const abrirEditarModal = (colab) => { setColaboradorEditando(colab); setModalAberto(true); };
  const fecharModal = () => { setModalAberto(false); setColaboradorEditando(null); };

  const salvarColaborador = (form) => {
    if (form.id) {
      setColaboradores((prev) => prev.map((c) => (c.id === form.id ? { ...form } : c)));
    } else {
      const iniciais = form.nome.split(" ").slice(0, 2).map((p) => p[0]?.toUpperCase()).join("");
      setColaboradores((prev) => [...prev, { ...form, id: Date.now(), iniciais }]);
    }
    fecharModal();
  };

  const excluirColaborador = (id) => {
    if (window.confirm("Deseja excluir este colaborador?")) {
      setColaboradores((prev) => prev.filter((c) => c.id !== id));
    }
  };

  const total = colaboradores.length;

  return (
    <div className="space-y-6">

      {/* Cabeçalho da página */}
      <div className="text-left">
        <h1 className="text-2xl font-bold text-slate-800">Colaboradores</h1>
        <p className="text-slate-400 text-sm mt-0.5">
          {total} {total === 1 ? "colaborador cadastrado" : "colaboradores cadastrados"}
        </p>
      </div>

      {/* Card da tabela */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">

        {/* Topo do card */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
          <div className="flex items-center gap-2 text-slate-700">
            <Users size={18} className="text-slate-500" />
            <span className="font-semibold text-sm">Colaboradores Cadastrados</span>
          </div>
          <button
            onClick={abrirNovoModal}
            className="flex items-center gap-2 bg-[#2563EB] text-white px-4 py-2 rounded-lg text-sm font-semibold shadow shadow-blue-500/20 hover:bg-blue-700 transition-all"
          >
            <Plus size={16} /> Novo Colaborador
          </button>
        </div>

        {/* Tabela */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-100">
                <th className="px-6 py-3 text-[11px] font-bold text-slate-400 uppercase tracking-wider">Nome</th>
                <th className="px-6 py-3 text-[11px] font-bold text-slate-400 uppercase tracking-wider">E-mail</th>
                <th className="px-6 py-3 text-[11px] font-bold text-slate-400 uppercase tracking-wider">Perfil</th>
                <th className="px-6 py-3 text-[11px] font-bold text-slate-400 uppercase tracking-wider">Departamento</th>
                <th className="px-6 py-3 text-[11px] font-bold text-slate-400 uppercase tracking-wider">Admissão</th>
                <th className="px-6 py-3 text-[11px] font-bold text-slate-400 uppercase tracking-wider">Gestor</th>
                <th className="px-6 py-3 text-[11px] font-bold text-slate-400 uppercase tracking-wider">Dias Disponíveis</th>
                <th className="px-6 py-3 text-[11px] font-bold text-slate-400 uppercase tracking-wider">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {colaboradores.length === 0 ? (
                <tr>
                  <td colSpan={8} className="px-6 py-12 text-center text-slate-400 text-sm">
                    Nenhum colaborador cadastrado ainda.
                  </td>
                </tr>
              ) : (
                colaboradores.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-50/60 transition-colors">

                    {/* Nome */}
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-xs shrink-0">
                          {item.iniciais}
                        </div>
                        <span className="text-sm font-semibold text-slate-700 whitespace-nowrap">{item.nome}</span>
                      </div>
                    </td>

                    {/* E-mail */}
                    <td className="px-6 py-4 text-sm text-slate-500 whitespace-nowrap">{item.email}</td>

                    {/* Perfil */}
                    <td className="px-6 py-4">
                      <PerfilBadge perfil={item.perfil} />
                    </td>

                    {/* Departamento */}
                    <td className="px-6 py-4 text-sm text-slate-600">{item.departamento}</td>

                    {/* Admissão */}
                    <td className="px-6 py-4 text-sm text-slate-600 whitespace-nowrap">
                      {formatarData(item.admissao)}
                    </td>

                    {/* Gestor */}
                    <td className="px-6 py-4 text-sm text-slate-600 whitespace-nowrap">
                      {item.gestor === "— Nenhum —" ? <span className="text-slate-400">—</span> : item.gestor}
                    </td>

                    {/* Dias Disponíveis */}
                    <td className="px-6 py-4">
                      <span className="text-sm font-semibold text-emerald-500 whitespace-nowrap">
                        {item.diasDisponiveis}d disponíveis
                      </span>
                    </td>

                    {/* Ações */}
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => abrirEditarModal(item)}
                          className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-600 border border-slate-200 rounded-lg hover:bg-slate-50 hover:border-slate-300 transition-all"
                        >
                          <Pencil size={13} /> Editar
                        </button>
                        <button
                          onClick={() => excluirColaborador(item.id)}
                          className="p-1.5 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-all"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </td>

                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {modalAberto && (
        <ModalColaborador
          colaborador={colaboradorEditando}
          onClose={fecharModal}
          onSave={salvarColaborador}
        />
      )}
    </div>
  );
};

export default Colaboradores;