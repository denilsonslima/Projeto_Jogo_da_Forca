function Jogo({setClicado, palavras, venceu, erro, perdeu}) {
    return (
        <>
            <section className="principal">
                <img src={`assets/img/forca${erro}.png`} alt="" />
                <button className="sortearPalavra" onClick={() => setClicado(false)}>Escolher Palavra</button>
                <div className="palavra" style={venceu ? {color: "#27AE60", gap: "0px"} : perdeu ? {color: "#ff0000", gap: "0px"} : {}}>
                    {palavras.map((l, index) => <div key={index}>{l}</div>)}
                </div>
            </section>
        </>
    );

}


export default Jogo
