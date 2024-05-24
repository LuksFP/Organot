import React from 'react';
import Colaborador from '../Colaborador';
import hexToRgba from 'hex-to-rgba';
import './time.css';

const Time = ({ time, colaboradores, aoDeletarColaborador, mudarCor, aoFavoritar }) => {
    const handleDeletarColaborador = (colaboradorId) => {
        aoDeletarColaborador(colaboradorId); // Chama a função aoDeletarColaborador passando o id do colaborador a ser deletado
    };

    return (
        colaboradores.length > 0 && (
            <section className='time' style={{ backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: hexToRgba(time.cor, '0.6') }}>
                <input type='color' className='input-cor' value={time.cor} onChange={evento => mudarCor(evento.target.value, time.id)} />
                <h3 style={{ borderColor: time.cor }}>{time.nome}</h3>
                <div className='colaboradores'>
                    {colaboradores.map((colaborador) => (
                        <Colaborador
                            key={colaborador.id}
                            colaborador={colaborador}
                            corDeFundo={time.cor}
                            aoDeletar={() => handleDeletarColaborador(colaborador.id)} // Passa uma função que chama handleDeletarColaborador com o id do colaborador
                            aoFavoritar={aoFavoritar}
                        />
                    ))}
                </div>
            </section>
        )
    );
}

export default Time;
