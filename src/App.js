import "./App.scss";
import axios from "axios";
import Card from "./components/card/card";
import { useEffect, useState } from "react";

function App() {
  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    const getPokemon = async () => {
      const pokemonGroup = [];

      for (let i = 0; i < 21; i++) {
        try {
          let pokemonData = await axios.get(
            `https://pokeapi.co/api/v2/pokemon/${i + 1}`
          );
          pokemonGroup.push({
            name: pokemonData.data.name,
            data: pokemonData.data,
          });
          console.log(pokemonGroup);
        } catch (error) {
          console.log(error);
        }
      }
      setPokemon(pokemonGroup);
    };

    getPokemon();
  }, []);

  if (!pokemon) return null;

  return (
    <div className="container">
      <div className="row">
        {pokemon.map((item) => (
          <Card
            pokemonName={item.name}
            pokemonLink={item.data.url}
            stats={item.data.stats}
            imageSource={item.data.sprites.other.dream_world.front_default}
            key={item.data.id}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
