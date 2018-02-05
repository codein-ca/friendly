import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  loggedIn: boolean;
  router: Router;

  constructor(router: Router) {
    this.loggedIn = false;
    this.router = router;
  }

  onLoginLogout() {
    this.loggedIn = !this.loggedIn;
    this.loggedIn ? this.router.navigate(['/me']) : this.router.navigate(['/welcome']);
  }
}
