import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent {

  @Input() porcentageWins !: number;

  ngOnInit(){
    console.log(this.porcentageWins)
  }

}
