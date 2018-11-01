import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { ActivatedRoute } from '@angular/router';


@Component
({
  selector: 'app-detail-pokemain',
  templateUrl: './detail-pokemain.component.html',
  styleUrls: ['./detail-pokemain.component.scss'],
  providers: [ PokemonService ]
})

export class DetailPokemainComponent implements OnInit 
{
  public Name:String;
  public Altura:String;
  public Peso:String;
  public Categoria:String;
  public Habilidad:String;
  public Sexo:String;
  public Id:String;

  Puntaje = 10;
  
  constructor(private _route: ActivatedRoute, private _pokemonService: PokemonService) 
  {
  }

  ngOnInit() 
  {
    this.Name = this._route.snapshot.paramMap.get('name');
    this.Altura = this._route.snapshot.paramMap.get('altura');
    this.Peso = this._route.snapshot.paramMap.get('peso');
    this.Categoria = this._route.snapshot.paramMap.get('categoria');
    this.Habilidad = this._route.snapshot.paramMap.get('habilidad');
    this.Sexo = this._route.snapshot.paramMap.get('sexo');
    this.Id = this._route.snapshot.paramMap.get('id');

    document.getElementById('imagen').style.background = "url('../../../assets/imgDetail/" + this.Id + ".png')";
  }
}