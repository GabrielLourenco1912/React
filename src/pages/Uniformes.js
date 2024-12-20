import React from "react";
import "lightbox2/dist/css/lightbox.css";
import "lightbox2/dist/js/lightbox-plus-jquery.js";

const Uniformes = () => {
    return (
        <div id="conteudoUniformes">
            <div className="texto">Uniformes da Temporada 2024</div>
            <div className="fotos">
                <div className="img">
                    <a href="/assets/img/camisabrancasantos.jpg" data-lightbox="fotosuniformes" data-title="Camisa Branca">
                        <img className="uniformes" src="/assets/img/camisabrancasantos.jpg" alt="Camisa Branca Santos" />
                    </a>
                    <p className="descricao">Camisa Branca</p>
                </div>
                <div className="img">
                    <a href="/assets/img/camisapretasantos.jpg" data-lightbox="fotosuniformes" data-title="Camisa Preta e Branca">
                        <img className="uniformes" src="/assets/img/camisapretasantos.jpg" alt="Camisa Preta e Branca Santos" />
                    </a>
                    <p className="descricao">Camisa Preta e Branca</p>
                </div>
                <div className="img">
                    <a href="/assets/img/camisasantosterceira.jpeg" data-lightbox="fotosuniformes" data-title="Camisa Dourada">
                        <img className="uniformes" src="/assets/img/camisasantosterceira.jpeg" alt="Camisa Dourada Santos" />
                    </a>
                    <p className="descricao">Camisa Dourada</p>
                </div>
            </div>
            <div className="texto">Camisas Comemorativas</div>
            <div className="fotos">
                <div className="img">
                    <a href="/assets/img/charliebrownbranca.png" data-lightbox="fotoscomemorativas" data-title="Camisa Charlie Brown Branca">
                        <img className="uniformes" src="/assets/img/charliebrownbranca.png" alt="Camisa Charlie Brown Branca" />
                    </a>
                    <p className="descricao">Camisa Charlie Brown Branca</p>
                </div>
                <div className="img">
                    <a href="/assets/img/charliebrownpreta.png" data-lightbox="fotoscomemorativas" data-title="Camisa Charlie Brown Preta">
                        <img className="uniformes" src="/assets/img/charliebrownpreta.png" alt="Camisa Charlie Brown Preta" />
                    </a>
                    <p className="descricao">Camisa Charlie Brown Preta</p>
                </div>
            </div>
        </div>
    );
};

export default Uniformes;
