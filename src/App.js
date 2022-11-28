import Jogo from "./componentes/Jogo";
import { useState } from "react";
import Letras from "./componentes/Letras";
import palavras from "./palavras"
import Chute from "./componentes/Chute";


function App() {
  const [clicado, setClicado] = useState(true)
  const [selecionados, setSelecionados] = useState([])
  const [palavra, setWork] = useState([])
  const [work, setPalavra] = useState([])
  const [venceu, setVenceu] = useState(false)
  const [perdeu, setPerdeu] = useState(false)
  const [erro, setErro] = useState(0)

  function iniciarJogo() {
    const escolhida = [...palavras[Math.floor(Math.random() * palavras.length)]]
    const escolha = escolhida.map(_e => "_")
    setWork(escolhida)
    setPalavra(escolha)
    setClicado(false)
  }

  function reiniciar() {
    let a = []
    setClicado(true)
    setVenceu(false)
    setPerdeu(false)
    setErro(0)
    setSelecionados([...a])
    iniciarJogo()
  }

  function escolha(letra) {
    const incluida = selecionados.includes(letra)
    if (!incluida) {
      setSelecionados([...selecionados, letra])
    }

    for (let i = 0; i < palavra.length; i++) {
      if (palavra[i] === letra) {
        work[i] = letra
        setPalavra([...work])
      }
    }

    if (!work.includes("_")) {
      setVenceu(true)
    }

    if (!palavra.includes(letra) && erro < 6) {
      setErro(erro + 1)
      if (erro === 5) {
        setPerdeu(true)
        setPalavra([...palavra])
      }
    } else if (palavra.toString() === work.toString()) {
      setClicado(true)
    }
  }

  return (
    <>
      <Jogo
        reiniciar={reiniciar}
        iniciarJogo={iniciarJogo}
        clicado={clicado}
        work={!clicado || venceu || perdeu ? work : []}
        venceu={venceu}
        perdeu={perdeu}
        erro={erro}
      />

      <Letras
        perdeu={perdeu}
        venceu={venceu}
        clicado={clicado}
        selecionados={selecionados}
        escolha={escolha} />

      <Chute
        palavra={palavra}
        setPalavra={setPalavra}
        perdeu={perdeu}
        setPerdeu={setPerdeu}
        venceu={venceu}
        setVenceu={setVenceu}
        setErro={setErro}
        clicado={clicado} />
    </>
  );
}

export default App