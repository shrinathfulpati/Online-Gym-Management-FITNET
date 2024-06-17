import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface User{
  userId:string;
  firstname:string;
  lastname:string
}

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrl: './userhome.component.css'
})
export class UserhomeComponent implements OnInit {


  constructor(private httpClient : HttpClient,private router:Router){}

  ngOnInit(): void {
    
    this.loadUsers();
  }

  users:User[]=[];

  loadUsers(){
    this.httpClient.get<User[]>('http://localhost:8080/gym/users/')
      .subscribe(
        response =>{
          this.users=response;
          console.log(this.users);
        },
        error=>{
          console.log(error);
        }
      )
  }

  viewUser(userId : string){
      this.router.navigate([`${userId}/userprofile`]);
  }


}
