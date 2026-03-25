import React from 'react';
import Sidebar from './components/Sidebar';

function App() {
  return (
    // O Sidebar já contém a estrutura do menu e o container <main> ao lado dele
    <div className="antialiased text-slate-900 bg-slate-50 min-h-screen">
      <Sidebar />
    </div>
  );
}

export default App;