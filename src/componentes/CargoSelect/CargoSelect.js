import React, { useState } from 'react';
import './CargoSelect.css';

const CargoSelect = ({ label, valor, aoAlterado, obrigatorio = false }) => {
  const [opcaoSelecionada, setOpcaoSelecionada] = useState('');

  const handleSelectChange = (evento) => {
    const valorSelecionado = evento.target.value;
    setOpcaoSelecionada(valorSelecionado);
    aoAlterado(valorSelecionado);
  };

  return (
    <div className="campo">
      <label>{label}</label>
      <select 
        value={valor} 
        onChange={handleSelectChange} 
        required={obrigatorio}
        className={opcaoSelecionada === 'Funcionário OM30' ? 'vermelho' : (opcaoSelecionada === 'Estagiário' ? 'verde' : '')}
      >
        <option value="">Selecione o cargo</option>
        <option value="Estagiário">Estagiário</option>
        <option value="Funcionário OM30">Funcionário OM30</option>
      </select>
    </div>
  );
}

export default CargoSelect;
