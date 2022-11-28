function Jogo({ work, venceu, erro, perdeu, iniciarJogo, clicado }) {
    return (
        <>
            <section className="principal">
                <img data-test="game-image" src={`assets/img/forca${erro}.png`} alt="" />
                <button
                    data-test="choose-word"
                    className="sortearPalavra"
                    onClick={() => clicado ? iniciarJogo() : perdeu || venceu ? iniciarJogo() : {}}>Escolher Palavra</button>
                <div
                    data-test="word"
                    data-answer={clicado ? work.toString() : {}}
                    className="palavra"
                    style={venceu ? { color: "#27AE60", gap: "0px" } : perdeu ? { color: "#ff0000", gap: "0px" } : {}}>
                    {work.map((l, index) => <div key={index}>{l}</div>)}
                </div>
            </section>
        </>
    );

}


export default Jogo
