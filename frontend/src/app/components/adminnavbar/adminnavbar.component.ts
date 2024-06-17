import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-adminnavbar',
  templateUrl: './adminnavbar.component.html',
  styleUrl: './adminnavbar.component.css'
})
export class AdminnavbarComponent {

  constructor(private router:Router){

  }

  home(){
    this.router.navigate([`/adminhome`])
  }

  slots(){
    this.router.navigate([`/adminslot`])
  }

  trainers(){
    this.router.navigate([`/admintrainer`])
  }

  logout(){
    this.router.navigate([`/login`])
  }

  
}
