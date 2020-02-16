import { Component , OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'offline-wallet-UI';
  ngOnInit(){
    var UserDetails = {
      Userid : 1,
      Transactionid : 0,
      AmountToBePaid : 0
    }
    localStorage.setItem('UserDetails', JSON.stringify(UserDetails));
  }
}
