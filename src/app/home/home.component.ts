import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  role: string;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.userData$.subscribe(userData => {
      userData ? this.role = userData.roles[0] : null
    })
  }
  

}
