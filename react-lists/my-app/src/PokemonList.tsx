type Props = {
  pokedexList: { number: string; name: string }[];
};

export function PokemonList({ pokedexList }: Props) {
  const listItems = pokedexList.map((pokemon) => (
    <li key={pokemon.number}>{pokemon.name}</li>
  ));
  return <ul>{listItems}</ul>;
}
