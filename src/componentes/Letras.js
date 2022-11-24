import { useState } from "react"
function Letras(props) {
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    const [selecionados, setSelecionados] = useState([]);


    function escolha(letra) {
        const incluida = selecionados.includes(letra)
        if (!incluida) {
            setSelecionados([...selecionados, letra])
        }
    }

    return (
        <section className="secundaria">
            <div className="teclado">
                {alfabeto.map((l) => 
                <button key={l} disabled={props.clicado} className={`letra ${selecionados.includes(l) ? "selecionado" : {}}`} onClick={() => escolha(l)}>{(l).toUpperCase()}</button>)}
            </div>
            <div clas="fundo">
                <label htmlFor="name">Já sei a palavra!</label>
                <input type="text" name="name" className="input" disabled={props.clicado} />
                <button className="enviar" disabled={props.clicado} onClick={() => alert("oi")}>Chutar</button>
            </div>
        </section>
    )
}

export default Letras

