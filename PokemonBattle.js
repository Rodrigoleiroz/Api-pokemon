const fraqueza = {
    agua:["eletrico", "planta", "terra"],
    eletrico: ["terra", "planta", "dragao"]
}

let pokemon1 = {
    nome:"raikou",
    life: 120,
    tipo:"eletrico",
    habilidades: [
        {
            nome:"eletricWave",
            hp: 60,
            tipo: "eletrico"
        },
        {
            nome:"speedattack",
            hp: 30,
            tipo: "normal"
        }
    ]
}
console.log(pokemon1.habilidades[0].nome)

let pokemon2 = {
    nome:"suicune",
    life:130,
    tipo:"agua",
    habilidades: [
        {
            nome:"hidroBomb",
            hp: 60,
            tipo: "agua"
        },
        {
            nome:"ironTail",
            hp: 30,
            tipo: "normal"
        }
    ]
}

const pokemonAtaque = (pokemonAttack, numeroAtaque, pokemonDefense) => {
    const pokemonAttaque = {...pokemonAttack};
    const pokemonDefende = {...pokemonDefense};

    //pega ataque do pokemon.
    const ataque = pokemonAttaque.habilidades[numeroAtaque - 1]
    console.log(ataque)

    //pega o tipo do ataque.
    // const tipoAtaque = pokemonAtaque.habilidades[numeroAtaque - 1].tipo
    const tipoAtaque = ataque.tipo
    console.log(tipoAtaque)

    //pega o tipo do pokemon defendendo.
    const tipoPokemonDefende = pokemonDefende.tipo
    console.log(tipoPokemonDefende)

    //pega fraquezas do pokemon defendendo.
    const fraquezaPokemonDefende = fraqueza[tipoPokemonDefende]
    console.log(fraquezaPokemonDefende)



    //verifica se o pokemon que defende e fraco ao ataque.
    const temFraqueza = fraquezaPokemonDefende.includes(tipoAtaque)
    console.log(temFraqueza)

    //se for fraco tira 2x de dano, se nao for tira 1x.
    
    let valorDoAtaque;
    if (temFraqueza){ 
        valorDoAtaque = 2 * ataque.hp
        console.log("Ataque dobrado", valorDoAtaque)   
    }
    else {
        valorDoAtaque = ataque.hp
        console.log("Ataque normal", valorDoAtaque)
    }
    //imprime status do pokemon que defende.
    console.log(" Vida do Pokemon ", pokemonDefende.life)


    const vidaAtual = pokemonDefende.life - valorDoAtaque
    console.log ("Vida depois do ataque", vidaAtual)
    pokemonDefende.life = vidaAtual
    return pokemonDefende
}

pokemon2 = pokemonAtaque (pokemon1, 1, pokemon2)
pokemonAtaque (pokemon1, 1, pokemon2)
pokemonAtaque (pokemon1, 1, pokemon2)
