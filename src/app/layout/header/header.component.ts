import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth/auth.service';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  items: MenuItem[];
  navBarMenuItems: MenuItem[];
  isLoggedIn: boolean;
  userName: string;
  showMenu = false;
  constructor(
    private authService: AuthService,
    private router: Router) {
    this.authService.loggedIn$.subscribe((status) => {
      this.isLoggedIn = status;
    });
  }

  ngOnInit(): void {
    this.authService.readUserDataFromLocalStorage();
    this.authService.userData$.subscribe(userData => {
      userData ? this.userName = userData.userName : null;

      if (userData) {
        this.items = [{
          label: '<i class="profile-image fas fa-user"></i>' + '<span class="user-name-label">' + this.userName + '</span>',
          escape: false,
          items: [{
            label: 'Chane password',
            icon: 'pi pi-replay',
            command: this.changePassword.bind(this)
          }, {
            label: 'Log out',
            icon: 'pi pi-fw pi-power-off',
            command: this.logOut.bind(this)
          }]
        }];
        this.navBarMenuItems = [
          {
            label: 'Home',
            routerLink: ['/home']
          },
          {
            label: 'Adler Services',
            routerLink: ['/' + userData.roles[0].toLowerCase() + '']
          },
          {
            label: 'Community',
          },
          {
            label: 'Events',
          }
        ];
      } else {
        this.items = [
          {
            label: 'Apply Now',
            routerLink: ['/register'],
            styleClass: 'text-primary'
          },
          {
            label: 'Continue Learning',
            routerLink: ['/login'],
            styleClass: 'text-primary'
          }
        ];
      }



    });

  }

  logOut() {
    this.authService.logout();
  }
  changePassword() {
    this.router.navigate(['/change-password']);
  }



}
