var bancoDeDados = []


console.log('antes', bancoDeDados)

var adicionarPokemon = (nome, nivel, tipo) => { 
    var pokemon = { 
        nome:nome, 
        nivel:nivel, 
        tipo:tipo
    }

    // var pokemon2 = { 
    //     nome, 
    //     nivel, 
    //     tipo, 
    //     id : 1,
    //     doido: true,  
    // }

    bancoDeDados.push(pokemon)
}

adicionarPokemon('picachu', 29, 'eletrico')
adicionarPokemon('charizard', 54, 'fogo')
adicionarPokemon('entei', 32, 'eletrico')
adicionarPokemon('absal', 22, 'noturno')
adicionarPokemon('articuno', 99, 'gelo')

var deletarPokemon = (nomePraDeletar) => {
    bancoDeDados = bancoDeDados.filter((nome)=>{ return nome != nomePraDeletar})

    //criar um filtro para retornar todos os nomes restantes.
}

deletarPokemon('entei')


console.log('depois', bancoDeDados)
