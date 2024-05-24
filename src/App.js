import React, { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Rodape from "./componentes/Rodape";
import Time from "./componentes/Time";
import { v4 as uuidv4 } from 'uuid'; // Importando a função v4 para gerar IDs únicas

function App() {
  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: 'Desk',
      cor: '#FF0000'
    },
    {
      id: uuidv4(),
      nome: 'Laboratório',
      cor: '#00ffff'
    },
    {
      id: uuidv4(),
      nome: 'Externo',
      cor: '#A6D157'
    },
    {
      id: uuidv4(),
      nome: 'Raphael',
      cor: '#FF00FF'
    },
    {
      id: uuidv4(),
      nome: 'Moacir',
      cor: '#8E236B'
    }
  ]);

  const [colaboradores, setColaboradores] = useState([]);

  function deletarColaborador(id) {
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id));
  }

  function mudarCor(cor, id) {
    setTimes(times.map(time => {
      if(time.id === id) {
        time.cor = cor;
      }
      return time;
    }));
  }

  function cadastrarTime({ nome, cor }) {
    setTimes([...times, { nome, cor, id: uuidv4() }])
  }

  function resolverFavorito(id) {
    setColaboradores(colaboradores.map(colaborador => {
      if(colaborador.id === id) colaborador.favorito = !colaborador.favorito;
      return colaborador;
    }))
  }

  // Função para adicionar um novo colaborador
  function adicionarColaborador(colaborador) {
    // Gerando uma nova ID única para o colaborador
    colaborador.id = uuidv4();
    // Se o colaborador for um estagiário, define o funcionário om30 como pai
    if (colaborador.cargo === "Estagiário") {
      colaborador.pai = "Funcionário om30";
    }
    setColaboradores([...colaboradores, colaborador]);
  }

  return (
    <div>
      <Banner />
      <Formulario aoCriarTime={cadastrarTime} times={times.map(time => time.nome)} aoCadastrar={adicionarColaborador} />
      <section className="times">
        <h1>Minha organização</h1>
        {times.map((time, indice) => (
          <Time
            key={indice}
            time={time}
            colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
            aoDeletarColaborador={deletarColaborador}
            aoFavoritar={resolverFavorito}
          />
        ))}
      </section>
      <Rodape />
    </div>
  );
}

export default App;
