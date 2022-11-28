const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

function Letras({ clicado, selecionados, escolha, perdeu, venceu }) {
    return (
        <section className="secundaria">
            <div className="teclado">
                {alfabeto.map((l) =>
                    <button
                        data-test="letter"
                        key={l}
                        disabled={perdeu || venceu || selecionados.includes(l)}
                        style={venceu || perdeu || clicado ? { backgroundColor: "#9FAAB5" } : {}}
                        className={`letra ${selecionados.includes(l) ? "selecionado" : {}}`}
                        onClick={() => escolha(l)}>{(l).toUpperCase()}</button>)}
            </div>
        </section>
    )
}

export default Letras

