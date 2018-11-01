import { Injectable } from '@angular/core';

@Injectable()
export class PokemonService 
{
    public pokemons: JSON; 

    constructor()
    {
        var text = '{ "pokemons": [ {"id": 1, "name":"Abra", "altura":"0,9 m", "peso":"19,5 Kg", "categoria":"Psi", "habilidad":"Foco Interno y Sincronía", "sexo":"Mixto", "url":"../../../assets/img/1.png"}, {"id": 2,  "name":"Bellsprout", "altura":"0,7 m", "peso":"4,0 Kg", "categoria":"Flor", "habilidad":"Clorofila", "sexo":"Mixto", "url":"../../../assets/img/2.png"}, {"id": 3,  "name":"Caterpie",   "altura":"0,3 m", "peso":"2,9 Kg", "categoria":"Gusano", "habilidad":"Polvo Escudo", "sexo":"Mixto", "url":"../../../assets/img/3.png"}, {"id": 4,  "name":"Charizard",  "altura":"1,7 m", "peso":"90,5 Kg", "categoria":"Llama", "habilidad":"Mar Llamas", "sexo":"Mixto", "url":"../../../assets/img/4.png"}, {"id": 5,  "name":"Charmander", "altura":"0,6 m", "peso":"8,5 Kg", "categoria":"Lagartija", "habilidad":"Mar Llamas", "sexo":"Mixto", "url":"../../../assets/img/5.png"}, {"id": 6,  "name":"Dratini",    "altura":"1,8 m", "peso":"3,3 Kg", "categoria":"Dragón", "habilidad":"Mudar", "sexo":"Mixto", "url":"../../../assets/img/6.png"}, {"id": 7,  "name":"Eevee",      "altura":"0,3 m", "peso":"6,5 Kg", "categoria":"Evolución", "habilidad":"Fuga y Adaptable", "sexo":"Mixto", "url":"../../../assets/img/7.png"}, {"id": 8,  "name":"Mankey",     "altura":"0,5 m", "peso":"28,0 Kg", "categoria":"Mono Cerdo", "habilidad":"Espiritu Vital y Irascible", "sexo":"Mixto", "url":"../../../assets/img/8.png"}, {"id": 9,  "name":"Ninjask",    "altura":"0,8 m", "peso":"12,0 Kg", "categoria":"Ninja", "habilidad":"Impulso", "sexo":"Mixto", "url":"../../../assets/img/9.png"}, {"id": 10, "name":"Nosepass",  "altura":"1,0 m", "peso":"97,0 Kg", "categoria":"Brújula", "habilidad":"Robustez y Imán", "sexo":"Mixto", "url":"../../../assets/img/10.png"}, {"id": 11, "name":"Squirtle",  "altura":"0,5 m", "peso":"9,0 Kg", "categoria":"Tortuguita", "habilidad":"Torrente", "sexo":"Mixto", "url":"../../../assets/img/11.png"} ] }';
        this.pokemons = JSON.parse(text);     
    }
    
    getPokemons()
    {
        return this.pokemons;
    }
}