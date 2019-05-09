import React, {Component} from "react"

class PokemonIndex extends Component {
    constructor(){
        super();
        this.state = {
         pokemon: []
        }
    }

    componentDidMount(pokemon) {
        this.getPokemon(pokemon)
        console.log(pokemon)
    }
    getPokemon = async () => {
        const result = await fetch("https://pokeapi.co/api/v2/pokemon/1/");
        const parsedresult = await result.json();
        console.log(parsedresult.name);
        this.setState({
            pokemon: parsedresult
        })
    }

    render(){
        console.log(this.state.pokemon)
        return (
            <div>
                <h1>Hello {this.props.username}!<h1>
                    </h1> Meet {this.state.pokemon.name} </h1>
                    <h2>According to pokeapi:</h2>
                <h3> {this.state.pokemon.name} weighs {this.state.pokemon.weight} something.</h3>
                <h3> and he is {this.state.pokemon.height} something tall.</h3>
            </div>
        )
    };
}


export default PokemonIndex