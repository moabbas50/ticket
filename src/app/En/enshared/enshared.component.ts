import { Component } from '@angular/core';

@Component({
  selector: 'app-enshared',
  templateUrl: './enshared.component.html',
  styleUrls: ['./enshared.component.css']
})
export class ENsharedComponent {
  title = 'ticket';
  checked: boolean = true;
  value!:any;
}
