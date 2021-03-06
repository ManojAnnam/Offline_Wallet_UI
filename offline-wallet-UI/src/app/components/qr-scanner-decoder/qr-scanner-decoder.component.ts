import { Component, OnInit,ViewChild, ViewEncapsulation } from '@angular/core';

import {QrScannerComponent} from 'angular2-qrscanner';
import { Router , NavigationExtras} from '@angular/router';

@Component({
  selector: 'app-qr-scanner-decoder',
  templateUrl: './qr-scanner-decoder.component.html',
  styleUrls: ['./qr-scanner-decoder.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class QrScannerDecoderComponent implements OnInit {
  constructor(
    private router: Router,
  ) {}
public qrcodeResult:any;
  @ViewChild(QrScannerComponent) qrScannerComponent: QrScannerComponent ;
  ngOnInit() {
    this.qrScannerComponent.getMediaDevices().then(devices => {
        console.log(devices);
        const videoDevices: MediaDeviceInfo[] = [];
        for (const device of devices) {
            if (device.kind.toString() === 'videoinput') {
                videoDevices.push(device);
            }
        }
        if (videoDevices.length > 0){
            let choosenDev;
            for (const dev of videoDevices){
                if (dev.label.includes('front')){
                    choosenDev = dev;
                    break;
                }
            }
            if (choosenDev) {
                this.qrScannerComponent.chooseCamera.next(choosenDev);
            } else {
                this.qrScannerComponent.chooseCamera.next(videoDevices[0]);
            }
        }
    });

    this.qrScannerComponent.capturedQr.subscribe(result => {
        console.log(result);
        const navigationExtras: NavigationExtras = {
          state: result
        };
        this.router.navigate(['/PymentComplete'], navigationExtras);
        this.qrcodeResult = result;
    });
}

}
