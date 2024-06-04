// Formulario.js
import React, { useState } from 'react';
import Botao from '../Botao';
import Campo from '../Campo';
import ListaSuspensa from '../ListaSuspensa';
import CargoSelect from '../CargoSelect/CargoSelect';
import './formulario.css';

const Formulario = ({ aoCadastrar, times, aoCriarTime }) => {
  const [nome, setNome] = useState('');
  const [cargo, setCargo] = useState('');
  const [time, setTime] = useState('');
  const [nomeTime, setNomeTime] = useState('');
  const [corTime, setCorTime] = useState('');
  const [cargaHoraria, setCargaHoraria] = useState('');

  const aoSubmeter = (evento) => {
    evento.preventDefault();
    console.log('form enviado', nome, cargo, time);
    aoCadastrar({
      nome,
      cargo,
      time,
      cargaHoraria // Incluímos a carga horária nos dados do colaborador
    });
  }

  return (
    <section className="formulario-container">
      <form className="formulario" onSubmit={aoSubmeter}>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <Campo
          obrigatorio={true}
          label='Nome'
          placeholder='Digite seu nome'
          valor={nome}
          aoAlterado={valor => setNome(valor)}
        />
        <CargoSelect
          obrigatorio={true}
          label='Cargo'
          valor={cargo}
          aoAlterado={valor => setCargo(valor)}
        />
        
        <ListaSuspensa
          obrigatorio={true}
          label='Times'
          items={times}
          valor={time}
          aoAlterado={valor => setTime(valor)}
        />
        <Campo
          label='Carga Horária'
          placeholder='Selecione a carga horária'
          valor={cargaHoraria}
          aoAlterado={valor => setCargaHoraria(valor)}
        />
        <Botao texto='Criar card' />
      </form>
      <form className="formulario" onSubmit={(evento) => {
        evento.preventDefault();
        aoCriarTime({ nome: nomeTime, cor: corTime });
      }}>
        <h2>Preencha os dados para criar um novo time.</h2>
        <Campo
          obrigatorio={true}
          label='Nome'
          placeholder='Digite o nome do time'
          valor={nomeTime}
          aoAlterado={valor => setNomeTime(valor)}
        />
        <Campo
          obrigatorio={true}
          label='Cor'
          type='color'
          placeholder='Digite sua cor'
          valor={corTime}
          aoAlterado={valor => setCorTime(valor)}
        />
        <Botao texto='Criar Time' />
      </form>
    </section>
  );
}

export default Formulario;
