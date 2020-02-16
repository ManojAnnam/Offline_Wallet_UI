/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { QrScannerDecoderComponent } from './qr-scanner-decoder.component';

describe('QrScannerDecoderComponent', () => {
  let component: QrScannerDecoderComponent;
  let fixture: ComponentFixture<QrScannerDecoderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QrScannerDecoderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QrScannerDecoderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
