import React, { useState } from "react";
import { Building2, Plus, X, Save } from "lucide-react";

const departamentosIniciais = [
  "Engenharia",
  "Financeiro",
  "Comercial",
  "Suporte",
  "RH",
  "Produto",
];

const Empresa = () => {
  const [form, setForm] = useState({
    razaoSocial: "Empresa Exemplo Ltda.",
    cnpj: "12.345.678/0001-90",
    minimoColaboradores: 30,
    antecedenciaMinima: 30,
  });

  const [departamentos, setDepartamentos] = useState(departamentosIniciais);
  const [novoDepartamento, setNovoDepartamento] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSalvar = () => {
    alert("Configurações salvas!");
  };

  const adicionarDepartamento = () => {
    const nome = novoDepartamento.trim();
    if (!nome) return;
    if (departamentos.includes(nome)) {
      alert("Departamento já existe.");
      return;
    }
    setDepartamentos((prev) => [...prev, nome]);
    setNovoDepartamento("");
  };

  const removerDepartamento = (nome) => {
    setDepartamentos((prev) => prev.filter((d) => d !== nome));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") adicionarDepartamento();
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-left">
        <h1 className="text-2xl font-bold text-slate-800">Configurações</h1>
        <p className="text-slate-500 text-sm">Empresa e departamentos</p>
      </div>

      {/* Card — Dados da Empresa */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-5">
        <div className="flex items-center gap-2 text-slate-700">
          <Building2 size={18} />
          <h2 className="text-base font-bold">Dados da Empresa</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
          <div className="space-y-1.5 text-left">
            <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
              Razão Social
            </label>
            <input
              name="razaoSocial"
              value={form.razaoSocial}
              onChange={handleChange}
              type="text"
              className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:border-blue-500 outline-none"
            />
          </div>

          <div className="space-y-1.5 text-left">
            <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
              CNPJ
            </label>
            <input
              name="cnpj"
              value={form.cnpj}
              onChange={handleChange}
              type="text"
              className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:border-blue-500 outline-none"
            />
          </div>

          <div className="space-y-1.5 text-left">
            <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
              Mínimo de Colaboradores por Dept. (%)
            </label>
            <input
              name="minimoColaboradores"
              value={form.minimoColaboradores}
              onChange={handleChange}
              type="number"
              min={0}
              max={100}
              className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:border-blue-500 outline-none"
            />
          </div>

          <div className="space-y-1.5 text-left">
            <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
              Antecedência Mínima (Dias)
            </label>
            <input
              name="antecedenciaMinima"
              value={form.antecedenciaMinima}
              onChange={handleChange}
              type="number"
              min={0}
              className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:border-blue-500 outline-none"
            />
          </div>
        </div>

        <div>
          <button
            onClick={handleSalvar}
            className="flex items-center gap-2 bg-[#2563EB] text-white px-5 py-2.5 rounded-xl text-sm font-semibold shadow-lg shadow-blue-500/20 hover:bg-blue-700 transition-all"
          >
            <Save size={16} /> Salvar Configurações
          </button>
        </div>
      </div>

      {/* Card — Departamentos */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-5">
        <div className="flex items-center gap-2 text-slate-700">
          <Building2 size={18} />
          <h2 className="text-base font-bold">Departamentos</h2>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {departamentos.map((dep) => (
            <span
              key={dep}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold rounded-lg"
            >
              {dep}
              <button
                onClick={() => removerDepartamento(dep)}
                className="text-blue-400 hover:text-blue-700 transition-colors"
              >
                <X size={12} />
              </button>
            </span>
          ))}
        </div>

        {/* Input novo departamento */}
        <div className="flex gap-3">
          <input
            value={novoDepartamento}
            onChange={(e) => setNovoDepartamento(e.target.value)}
            onKeyDown={handleKeyDown}
            type="text"
            placeholder="Novo departamento..."
            className="flex-1 px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:border-blue-500 outline-none"
          />
          <button
            onClick={adicionarDepartamento}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-gray-200 bg-white text-slate-600 text-sm font-semibold hover:bg-gray-50 transition-all"
          >
            <Plus size={16} /> Adicionar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Empresa;