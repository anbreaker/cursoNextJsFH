import { PokemonGrid, PokemonsReponse, SimplePokemon } from '@/pokemons';

export const metadata = {
  title: `Pokémon's List`,
  description: `Pokémon's List description`,
};

const getPokemons = async (limit = 20, offset = 0): Promise<SimplePokemon[]> => {
  const data: PokemonsReponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`).then(
    (response) => response.json()
  );

  const pokemons = data.results.map((pokemon) => ({
    id: pokemon.url.split('/').at(-2)!,
    name: pokemon.name,
  }));

  // throw new Error('Error fetching pokemons');

  return pokemons;
};

export default async function PokemonsPage() {
  const pokemons = await getPokemons(151);
  // console.log(pokemons);
  return (
    <div className='flex flex-col'>
      <span className='flex items-center text-3xl my-2 ml-2'>
        Pokémon&lsquo;s List
        <small className='ml-2 bg-slate-400 p-1 rounded-md italic'>Static</small>
      </span>

      <PokemonGrid pokemons={pokemons} />
    </div>
  );
}
