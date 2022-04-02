/*
1- listagem
2-cartão do pokemon
 */
const listaSelecaoPokemons = document.querySelectorAll(".pokemon");
const pokemonCard = document.querySelectorAll(".cartao-pokemon");

listaSelecaoPokemons.forEach((pokemon) => {
  pokemon.addEventListener("click", () => {
    // remover a classe aberto só do cartão que está aberto
    const cartaoPokemonAberto = document.querySelector(".aberto");
    cartaoPokemonAberto.classList.remove("aberto");

    // ao clicar em um pokemon da listagem pegamos o id desse pokemon pra saber qual cartão mostrar
    const idPokemonSelecionado = pokemon.attributes.id.value;

    const cartaoPokemonParaAbrir = document.getElementById(
      "cartao-" + idPokemonSelecionado
    );
    cartaoPokemonParaAbrir.classList.add("aberto");

    //remover a classe ativo que marca o pokemon selecionado
    const pokemonAtivoNaListagem = document.querySelector(".ativo");
    pokemonAtivoNaListagem.classList.remove("ativo");

    //adicionar a classe ativo no item da lista selecionado
    const pokemonSelecionadoNaListagem =
      document.getElementById(idPokemonSelecionado);
    pokemonSelecionadoNaListagem.classList.add("ativo");
  });
});
