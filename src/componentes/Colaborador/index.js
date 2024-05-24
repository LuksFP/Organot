import React, { useState } from 'react';
import './colaborador.css';
import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

const Colaborador = ({ colaborador, corDeFundo, aoDeletar, aoFavoritar, aoAdicionarFoto }) => {
    const [fotoSelecionada, setFotoSelecionada] = useState(null);

    function favoritar() {
        aoFavoritar(colaborador.id);
    }

    function handleFotoSelecionada(event) {
        const foto = event.target.files[0];
        setFotoSelecionada(foto);
        aoAdicionarFoto(colaborador.id, foto);
    }

    return (
        <div className="colaborador">
            <AiFillCloseCircle size={25} className="deletar" onClick={() => aoDeletar(colaborador.id)} />
            <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
                {fotoSelecionada ? (
                    <img src={URL.createObjectURL(fotoSelecionada)} alt={colaborador.nome} />
                ) : (
                    <label htmlFor={`foto-input-${colaborador.id}`}>
                        <div className="placeholder">Tirar Foto</div>
                    </label>
                )}
                <input
                    id={`foto-input-${colaborador.id}`}
                    type="file"
                    accept="image/*"
                    capture="user"
                    onChange={handleFotoSelecionada}
                    style={{ display: 'none' }}
                />
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
