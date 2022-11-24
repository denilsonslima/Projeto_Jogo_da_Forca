import palavras from "../palavras";

function Jogo(props) {
    const palavra = [...palavras[Math.floor(Math.random() * palavras.length)]]
    return (
        <>
            <section className="principal">
                <img src="assets/img/forca0.png" alt="" />
                <button className="sortearPalavra" onClick={() => props.setClicado(false)}>Escolher Palavra</button>
                <div className="palavra">
                    {palavra.map((L, index) => <div key={index}><p>{L}</p></div>)}
                </div>
            </section>
        </>
    );

}


export default Jogo