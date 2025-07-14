import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  // templateUrl: './user.component.html',
  // styleUrl: './user.component.css'
  // For Single File Component
  // Using inline template and styles for simplicity
  template: "<h1 class='text'>Welcome to Angular Basic</h1>",
  styles:['.text { color: blue; }']
})
export class UserComponent {

}
