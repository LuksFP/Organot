import React, { useState, useEffect } from 'react';
import './colaborador.css';
import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart, AiOutlineCamera, AiOutlineDelete } from 'react-icons/ai';

const Colaborador = ({ colaborador, corDeFundo, aoDeletar, aoFavoritar }) => {
    const [fotoSelecionada, setFotoSelecionada] = useState(() => {
        const fotoSalva = localStorage.getItem(`foto-${colaborador.id}`);
        return fotoSalva || null;
    });

    useEffect(() => {
        localStorage.setItem(`foto-${colaborador.id}`, fotoSelecionada);
    }, [fotoSelecionada, colaborador.id]);

    function favoritar() {
        aoFavoritar(colaborador.id);
    }

    function handleFotoSelecionada(event) {
        const foto = event.target.files[0];
        setFotoSelecionada(URL.createObjectURL(foto));
        salvarFotoLocalmente(colaborador.id, URL.createObjectURL(foto));
    }

    function removerFoto() {
        setFotoSelecionada(null);
        localStorage.removeItem(`foto-${colaborador.id}`);
    }

    function salvarFotoLocalmente(id, fotoURL) {
        localStorage.setItem(`foto-${id}`, fotoURL);
    }

    return (
        <div className="colaborador">
            <AiFillCloseCircle size={25} className="deletar" onClick={() => aoDeletar(colaborador.id)} />
            <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
                <label htmlFor={`foto-input-${colaborador.id}`} className="botao-foto">
                    <AiOutlineCamera size={25} />
                    <input
                        id={`foto-input-${colaborador.id}`}
                        type="file"
                        accept="image/*"
                        capture="user"
                        onChange={handleFotoSelecionada}
                        style={{ display: 'none' }}
                    />
                </label>
                {fotoSelecionada && (
                    <>
                        <img src={fotoSelecionada} alt={colaborador.nome} />
                        <AiOutlineDelete size={20} className="remover-foto" onClick={removerFoto} />
                    </>
                )}
            </div>
            <div className="rodape">
                <h4>{colaborador.nome}</h4>
                <h5>{colaborador.cargo}</h5>
                <p style={{ marginTop: '8px', marginBottom: '8px' }}>Carga Horária: {colaborador.cargaHoraria}</p>
                <div className='favorito'>
                    {colaborador.favorito ? <AiFillHeart color="#ff0000" size={25} onClick={favoritar} /> : <AiOutlineHeart size={25} onClick={favoritar} />}
                </div>
            </div>
        </div>
    );
}

export default Colaborador;
