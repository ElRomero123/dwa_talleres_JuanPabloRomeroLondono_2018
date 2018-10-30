import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailPokemainComponent } from './detail/detail-pokemain/detail-pokemain.component';
import { HomePokemonsComponent } from './home/home-pokemons/home-pokemons.component';

const appRoutes: Routes = 
[
    { path:'', component:HomePokemonsComponent  },
    { path:'detail/:id', component:DetailPokemainComponent }
];

export const appRoutingProviders: any = [];
export const routing: ModuleWithProviders = RouterModule.forRoot( appRoutes );

