export const fetchAllPokemon = () => {
  return $.ajax({
    method: "get",
    url: "/api/pokemon"
  })
}

export const fetchPokemon = (pokeId) => {
  return $.ajax({
    method: "get",
    url: `api/pokemon/${pokeId}`
  })
}

