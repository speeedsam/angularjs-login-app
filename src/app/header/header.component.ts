import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'apl-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private  myService: UserService) { }

  ngOnInit() {
   console.log('Is user logged in?',this.myService.getUserLoggedIn());
  }

}
