import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AdminComponent } from './Components/admin/admin.component';
import { UserComponent } from './Components/user/user.component';

@Component({
  selector: 'app-root',
  imports: [ AdminComponent, UserComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  title = 'AngularBasic';
}
