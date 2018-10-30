import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Router } from '@angular/router';

@Component
(
  {
    selector: 'app-home-pokemons',
    templateUrl: './home-pokemons.component.html',
    styleUrls: ['./home-pokemons.component.scss'],
    providers: [ PokemonService ]
  }
)

export class HomePokemonsComponent implements OnInit 
{
  public pokemons: JSON;
  constructor(private _pokemonService: PokemonService, private _route:Router) 
  {
    
  }

  ngOnInit() 
  {
        this.pokemons = this._pokemonService.getPokemons();
  }
  goToRequests() {
    this._route.navigate(['/requests']);
  }
}
