import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qr-code-generator',
  templateUrl: './qr-code-generator.component.html',
  styleUrls: ['./qr-code-generator.component.css']
})
export class QrCodeGeneratorComponent  {
  // tslint:disable-next-line: ban-types
  WalletAmount: number = 100;
  // tslint:disable-next-line: ban-types
  AmounToBePaid: number;
  title = 'generate-qrcode';
  elementType: 'url' | 'canvas' | 'img' = 'url';
  value: string;
  display = false;
  href: string;
  generateQRCode() {
    if (!this.AmounToBePaid || isNaN(this.AmounToBePaid)) {
      this.display = false;
      alert('Please enter the name');
      return;
    } else if (this.AmounToBePaid > this.WalletAmount) {
      alert('Sorry! you don\'t have enough balance');
      return;
    } else {
      // tslint:disable-next-line: prefer-const
      var UserDetails = JSON.parse(localStorage.getItem('UserDetails'));
      UserDetails.AmountToBePaid = this.AmounToBePaid;
      UserDetails.Transactionid = 101012010201;
      this.value = JSON.stringify(UserDetails)
      this.display = true;
    }
  }
  downloadImage() {
    this.href = document.getElementsByTagName('img')[0].src;
  }

}
