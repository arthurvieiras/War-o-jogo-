import { Component, OnInit, Inject } from '@angular/core';
import { PhaserService } from '../services/phaser.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  constructor(@Inject(PhaserService) ps:PhaserService) {
    console.log(ps.Phaser);
  }

  ngOnInit() {
  }

}
