import { Component } from '@angular/core';

@Component({
  selector: 'app-arbicshared',
  templateUrl: './arbicshared.component.html',
  styleUrls: ['./arbicshared.component.css']
})
export class ArbicsharedComponent {
  title = 'ticket';
  checked: boolean = true;
  value!:any;
}
