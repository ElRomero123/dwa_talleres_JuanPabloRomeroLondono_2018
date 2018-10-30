import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routing, appRoutingProviders } from './app.routing';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeHeaderComponent } from './home/home-header/home-header.component';
import { HomePokemonsComponent } from './home/home-pokemons/home-pokemons.component';
import { DetailPokemainComponent } from './detail/detail-pokemain/detail-pokemain.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeHeaderComponent,
    HomePokemonsComponent,
    DetailPokemainComponent
  ],
  imports: [
    BrowserModule,
    routing,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
