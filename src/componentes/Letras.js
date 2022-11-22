export default function Letras() {
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    return (
        <div className="teclado">
            {alfabeto.map((l) => <Letra key={l} letra={l}/>)}
        </div>
    )
}

function Letra(props){
    return (
        <div className="letra">{(props.letra).toUpperCase()}</div>
    )
}