import Letras from "./Letras";

function Jogo(){
    return(
        <main>
            <section className="principal">
                <img src="assets/img/forca0.png" alt="" />
                <button>Escolher Palavra</button>
            </section>
            <section className="secundaria">
                <Letras/>
                <div clas="fundo">
                    <form action="">
                        <label htmlFor="name">Já sei a palavra!</label>
                        <input type="text" name="name" className="input"/>
                        <input type="submit" value="Chutar" name="enviar"/>
                    </form>
                </div>
            </section>
        </main>
    );
}

export default Jogo