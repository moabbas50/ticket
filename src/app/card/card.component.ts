import { Component } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';
import { QRCodeErrorCorrectionLevel } from "qrcode";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {






  // ////////////////////////////
value="www.tazkty.com/473847";
copyToClipboard() {
  navigator.clipboard.writeText(this.value).then(
    () => console.log('Text copied to clipboard'),
    (err) => console.error('Unable to copy text to clipboard', err)
  )
}
}
