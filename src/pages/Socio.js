import React from "react";

const Socio = () => {
    return (
        <div>
            <div id="texto">SEJA SÓCIO TORCEDOR!</div>
            <div id="conteudoSocio">
                <form action="/cadastro" method="Post">
                    <div className="inputs">
                        <label htmlFor="nome">Nome:</label>
                        <input type="text" placeholder="Digite seu nome" id="nome" name="nome" required />
                    </div>
                    <div className="inputs">
                        <label htmlFor="email">E-mail:</label>
                        <input type="email" placeholder="Digite seu e-mail" id="email" name="email" required />
                    </div>
                    <div className="inputs">
                        <label htmlFor="senha">Senha:</label>
                        <input type="password" placeholder="Digite sua senha" id="senha" name="senha" required />
                    </div>
                    <div className="inputs">
                        <label htmlFor="confirmar_senha">Confirmar Senha:</label>
                        <input type="password" placeholder="Confirme sua senha" id="confirmar_senha" name="confirmar_senha" required />
                    </div>
                    <div className="inputs">
                        <label htmlFor="ncartao">Nº do Cartão:</label>
                        <input type="text" placeholder="Digite o número do cartão" id="ncartao" name="ncartao" required />
                    </div>
                    <div className="inputs">
                        <label htmlFor="CVV">CVV:</label>
                        <input type="text" placeholder="Digite o CVV" id="CVV" name="CVV" required />
                    </div>
                    <div className="inputs">
                        <input type="submit" value="Cadastrar" />
                    </div>
                </form>
                <div id="mapa">
                    <div id="maptext">
                        <h3>Localização do Estádio Urbano Caldeira</h3>
                    </div>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14584.03789829742!2d-46.34780970021834!3d-23.96010510644292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce0368d089229b%3A0xae243f28a776ae4d!2sEst%C3%A1dio%20Urbano%20Caldeira%20-%20Vila%20Belmiro!5e0!3m2!1spt-BR!2sbr!4v1730429139715!5m2!1spt-BR!2sbr"
                        width="600"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default Socio;
