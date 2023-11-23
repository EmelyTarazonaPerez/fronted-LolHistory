import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-nabvar></app-nabvar>
<router-outlet></router-outlet>`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fronted-lolhistory';
}
