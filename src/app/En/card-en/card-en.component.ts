import { Component } from '@angular/core';

@Component({
  selector: 'app-card-en',
  templateUrl: './card-en.component.html',
  styleUrls: ['./card-en.component.css']
})
export class CardEnComponent {
  // ////////////////////////////
  value="www.tazkty.com/473847";
  copyToClipboard() {
    navigator.clipboard.writeText(this.value).then(
      () => console.log('Text copied to clipboard'),
      (err) => console.error('Unable to copy text to clipboard', err)
    )
  }
}
