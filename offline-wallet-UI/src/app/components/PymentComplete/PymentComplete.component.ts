import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-PymentComplete',
  templateUrl: './PymentComplete.component.html',
  styleUrls: ['./PymentComplete.component.css']
})
export class PymentCompleteComponent implements OnInit {

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation.extras.state;
    alert(state);
  }

  ngOnInit() {
  }

}
