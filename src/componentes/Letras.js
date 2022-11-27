import { useState } from "react"

const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

function Letras({clicado, selecionados, escolha, perdeu, venceu, palavra, setVenceu, setPalavra, setPerdeu, setErro}) {
    const [chute, setChut] = useState("")

    function pesquisar(){
        if(chute === palavra.toString().replaceAll(",", "")){
            setVenceu(true)
            setPalavra([...palavra])
        } else {
            setPerdeu(true)
            setPalavra([...palavra])
            setErro(6)
        }
    }

    return (
        <section className="secundaria">
            <div className="teclado">
                {alfabeto.map((l) => 
                <button 
                    key={l} 
                    disabled={perdeu || venceu || selecionados.includes(l)}
                    style={venceu || perdeu || clicado ? {backgroundColor: "#9FAAB5"}: {}} 
                    className={`letra ${selecionados.includes(l) ? "selecionado" : {}}`}
                    onClick={() => escolha(l)}>{(l).toUpperCase()}</button>)}
            </div>
            <div clas="fundo">
                <label htmlFor="name">Já sei a palavra!</label>
                <input type="text"
                 name="name"
                 className="input"
                 value={chute}
                 onChange={e => setChut(e.target.value)}
                 disabled={clicado || venceu || perdeu} />
                <button className="enviar"
                disabled={clicado || venceu || perdeu}
                onClick={pesquisar}>Chutar</button>
            </div>
        </section>
    )
}

export default Letras

