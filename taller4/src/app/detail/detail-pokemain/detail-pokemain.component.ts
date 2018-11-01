import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../../services/pokemon.service';

@Component
({
  selector: 'app-detail-pokemain',
  templateUrl: './detail-pokemain.component.html',
  styleUrls: ['./detail-pokemain.component.scss'],
  providers: [ PokemonService ]
})

export class DetailPokemainComponent implements OnInit 
{
  public BDPokemons: JSON;
  public puntaje = 10;
  public id = this._route.snapshot.paramMap.get('id');
  
  constructor(private _route: ActivatedRoute, private _pokemonService: PokemonService) 
  {
  }

  ngOnInit() 
  {
    this.BDPokemons = this._pokemonService.getPokemons();
  }
}