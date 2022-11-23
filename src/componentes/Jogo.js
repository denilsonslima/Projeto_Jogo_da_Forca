import Letras from "./Letras";
import palavras from "../palavras";
import { useState } from "react";

function Jogo(){
    const [clicado, setClicado] = useState(true)

    function sortearPalavra() {
        const palavra = [...palavras[Math.floor(Math.random() * palavras.length)]]
        setClicado(false)
    }

    return(
        <main>
            <section className="principal">
                <img src="assets/img/forca0.png" alt="" />
                <button className="sortearPalavra" onClick={sortearPalavra}>Escolher Palavra</button>
                <div className="palavra">
                    <div>_</div>
                    <div>_</div>
                    <div>_</div>
                    <div>_</div>
                    <div>_</div>
                    <div>_</div>
                    <div>_</div>
                    <div>_</div>
                    <div>_</div>
                    <div>_</div>
                    <div>_</div>
                </div>
            </section>
            <section className="secundaria">
                <Letras/>
                <div clas="fundo">
                    <form action="">
                        <label htmlFor="name">Já sei a palavra!</label>
                        <input type="text" name="name" className="input" disabled={clicado}/>
                        <button className="enviar" disabled={clicado}>Chutar</button>
                    </form>
                </div>
            </section>
        </main>
    );
}


export default Jogo