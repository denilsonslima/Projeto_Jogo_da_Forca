import { useState } from "react"

function Chute({ clicado, perdeu, venceu, palavra, setVenceu, setPalavra, setPerdeu, setErro }) {
    const [chute, setChut] = useState("")

    function pesquisar() {
        if (chute === palavra.toString().replaceAll(",", "")) {
            setVenceu(true)
            setPalavra([...palavra])
        } else {
            setPerdeu(true)
            setPalavra([...palavra])
            setErro(6)
        }
    }

    return (
        <section className="fundo">
            <label htmlFor="name">Já sei a palavra!</label>
            <input
                data-test="guess-input"
                type="text"
                name="name"
                className="input"
                value={chute}
                onChange={e => setChut(e.target.value)}
                disabled={clicado || venceu || perdeu} />
            <button
                data-test="guess-button"
                className="enviar"
                disabled={clicado || venceu || perdeu}
                onClick={pesquisar}>Chutar</button>
        </section>
    )

}

export default Chute