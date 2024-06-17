import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  @Input() userId = '';

    constructor(private router:Router){}

    home(){
      this.router.navigate([`${this.userId}/home`]);
    }

    slots(){
      this.router.navigate([`${this.userId}/slots`]);
    }

    trainers(){
      this.router.navigate([`${this.userId}/trainers`])
    }

    logout(){
      this.router.navigate([`/login`])
    }

    contact(){
      this.router.navigate([`${this.userId}/contactus`])
    }
}
