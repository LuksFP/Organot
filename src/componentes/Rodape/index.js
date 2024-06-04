import './rodape.css'

const Rodape = () => {
    return (
        <footer className="footer">
            <section>
                <ul>
                    <li>
                        <a href="https://www.facebook.com/seu_perfil" target="_blank" rel="noopener noreferrer">
                            <img src="/imagens/facebook.png" alt="Facebook" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.twitter.com/seu_perfil" target="_blank" rel="noopener noreferrer">
                            <img src="/imagens/twitter.png" alt="Twitter" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/eaelukinhasmp/" target="_blank" rel="noopener noreferrer">
                            <img src="/imagens/instagram.png" alt="Instagram" />
                        </a>
                    </li>
                </ul>
            </section>
            <section>
                <img src="/imagens/logo.png" alt="Logo" />
            </section>
            <section>
                <p>
                    Desenvolvido por Lucas.
                </p>
            </section>
        </footer>
    );
}

export default Rodape;
