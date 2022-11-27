import Jogo from "./componentes/Jogo";
import { useState } from "react";
import Letras from "./componentes/Letras";
import palavras from "./palavras"
const palavra = [...palavras[Math.floor(Math.random() * palavras.length)]]
const teste = palavra.map(_e => "_")

console.log(palavra)

function App() {
  const [clicado, setClicado] = useState(true)
  const [selecionados, setSelecionados] = useState([])
  const [palavras, setPalavra] = useState(teste)
  const [venceu, setVenceu] = useState(false)
  const [perdeu, setPerdeu] = useState(false)
  const [erro, setErro] = useState(0)

  function escolha(letra) {
    const incluida = selecionados.includes(letra)
    if (!incluida) {
      setSelecionados([...selecionados, letra])
    }

    palavra.map((e, index) => {
      if (e === letra) {
        palavras[index] = letra
        setPalavra([...palavras])
      }
    })

    if (!palavras.includes("_")) {
      setVenceu(true)
    }

    if (!palavra.includes(letra) && erro < 6) {
      setErro(erro + 1)
      if (erro === 5) {
        setPerdeu(true)
        setPalavra([...palavra])
      }
    } else if (palavra.toString() === palavras.toString()) {
      setClicado(true)
    }
  }

  return (
    <>
      <Jogo
        setClicado={setClicado}
        palavras={!clicado || venceu || perdeu ? palavras : []}
        venceu={venceu}
        perdeu={perdeu}
        erro={erro}
      />

      <Letras
        perdeu={perdeu}
        venceu={venceu}
        clicado={clicado}
        setClicado={setClicado}
        selecionados={selecionados}
        setSelecionados={setSelecionados}
        escolha={escolha} />
    </>
  );
}

export default App