import { useState } from "react";
import Header from "./components/Header";
import Container from "./components/Container";
import Welcome from "./components/Welcome";
import CharacterContainer from "./components/CharacterContainer";

function App() {
  const [character, setCharacters] = useState(null);


  const reqApi = async () => {
    const api = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes?count=3');
    const frase = await api.json();
    setCharacters(frase);
  }



  return (
    <>
      <Container>
        <Header />
        {!character ? (
          <Welcome reqApi={reqApi} />
        ) : (
          <CharacterContainer characters={character} reqApi={reqApi} />
        )}


      </Container>

    </>

  );
}



export default App;
