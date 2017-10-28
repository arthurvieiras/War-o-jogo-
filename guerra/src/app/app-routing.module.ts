import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { GameComponent } from './game/game.component';
import { OptionsComponent } from './options/options.component';


const routes: Routes = [
  { path: '', component: MainMenuComponent },
  { path: 'menu', component: MainMenuComponent },
  { path: 'game', component: GameComponent },
  { path: 'options', component: OptionsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
