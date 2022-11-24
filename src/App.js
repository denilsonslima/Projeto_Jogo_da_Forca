import Jogo from "./componentes/Jogo";
import { useState } from "react";
import Letras from "./componentes/Letras";
import palavras from "./palavras";
function App() {
  const [clicado, setClicado] = useState(true)
  return (
    <>
      <Jogo clicado={clicado} setClicado={setClicado}/>
      <Letras clicado={clicado} setClicado={setClicado}/>
    </>
  );
}

export default App