import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-pokemain',
  templateUrl: './detail-pokemain.component.html',
  styleUrls: ['./detail-pokemain.component.scss']
})
export class DetailPokemainComponent implements OnInit 
{

  constructor(private _route: ActivatedRoute) 
  { 
    console.log(this._route.snapshot.paramMap.get('id'));
  }

  ngOnInit() {
  }

}
