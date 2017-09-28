import { Component, OnInit, Inject } from '@angular/core';
import { PhaserService } from './services/phaser.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(@Inject(PhaserService) ps:PhaserService){
    console.log(ps.Phaser);
  }

  ngOnInit(){
    //console.log(Phaser, this.title);
  }
}
