import { Injectable } from '@angular/core';

@Injectable()
export class PokemonService 
{
    public pokemons: JSON; 

    constructor()
    {
        var text = '{"pokemons":[ {"id": 1, "name":"Abra", "url":"../../../assets/img/1.png"}, {"id": 2, "name":"Bellsprout", "url":"../../../assets/img/2.png"}, {"id": 3, "name":"Caterpie", "url":"../../../assets/img/3.png"}, {"id": 4, "name":"Charizard", "url":"../../../assets/img/4.png"}, {"id": 5, "name":"Charmander", "url":"../../../assets/img/5.png"}, {"id": 6, "name":"Dratini", "url":"../../../assets/img/6.png"}, {"id": 7, "name":"Eevee", "url":"../../../assets/img/7.png"}, {"id": 8, "name":"Mankey", "url":"../../../assets/img/8.png"}, {"id": 9, "name":"Ninjask", "url":"../../../assets/img/9.png"}, {"id": 10, "name":"Nosepass", "url":"../../../assets/img/10.png"}, {"id": 11, "name":"Squirtle", "url":"../../../assets/img/11.png"}]}';
        this.pokemons = JSON.parse(text);     
    }
    
    getPokemons()
    {
        return this.pokemons;
    }
}