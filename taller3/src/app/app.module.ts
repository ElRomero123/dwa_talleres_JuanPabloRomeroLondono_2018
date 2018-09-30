import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { PokemainComponent } from './component/pokemain/pokemain.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './page/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PokemainComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
