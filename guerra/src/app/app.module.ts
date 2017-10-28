import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhaserService } from './services/phaser.service';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { GameComponent } from './game/game.component';
import { OptionsComponent } from './options/options.component';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    GameComponent,
    OptionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [PhaserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
