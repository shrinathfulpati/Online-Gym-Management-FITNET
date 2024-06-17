import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { error } from 'console';
import { response } from 'express';

interface User{
  rid : string;
  firstname : string ;
  lastname : string ;
  image : string;
}

interface Count{
  brides : number;
  grooms: number;
}

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrl: './admindashboard.component.css'
})
export class AdmindashboardComponent implements OnInit{

  totalusers :number=0;
  
  count: Count = {
    brides : 0,
    grooms : 0
  }

  users:User[] =[];

  constructor(private httpClient:HttpClient,private router:Router){}

  ngOnInit(): void {
    this.load()
  }

  load(){
    this.httpClient.get<User[]>("http://localhost:8081/omw/admin/users")
    .subscribe(
      response => {this.users=response 
      this.totalusers=this.users.length;
      }
      ,
      error=>{
        console.log(error);
      }
    )

    this.httpClient.get<Count>("http://localhost:8081/omw/users/count")
      .subscribe(
        response =>{
          this.count.brides = response.brides,
          this.count.grooms = response.grooms
        },
        error =>{
          console.log(error);
        }
      )



  }

  view(riid:string){
    this.router.navigate([`0/matchdetails/${riid}`]);
  }

  delete(riid:string){
    this.httpClient.post(`http://localhost:8081/omw/admin/users/delete`,riid)
      .subscribe(
        response =>{
          window.alert("User Deleted Successfully");
          this.load()
        },
        error=>{
          console.log(error);
          this.load()
        }
      )
  }

  update(rid:string){
    this.router.navigate([`updateprofile/${rid}`]);
  }
 

}
