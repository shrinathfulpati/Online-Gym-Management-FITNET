import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterLink } from '@angular/router';

interface User{

  userId :string ,

	firstname :string,
	
	lastname : string,
	
	email : string,
	
	mobileno : string,

  slotId : string,

  startTime : string,

  endTime : string,

  trainerId : string,

  tfirstname : string,

  tlastname : string,

  temail :string,

  tmobileno : string
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  userId : string = '';

  user : User = {

  userId :'' ,

	firstname :'',
	
	lastname : '',
	
	email : '',
	
	mobileno : '' ,

  slotId  : '' ,

  startTime  : '' ,

  endTime  : '' ,

  trainerId  : '' ,

  tfirstname  : '' ,

  tlastname  : '' ,

  temail : '',

  tmobileno : ''

  }
   
  constructor(private httpClient:HttpClient , private router:Router,private route :ActivatedRoute){}

  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      this.userId=params['userId'];
    })
    console.log(this.userId)
    this.loadUser();
  }

  loadUser(){
    this.httpClient.get<User>(`http://localhost:8080/gym/users/${this.userId}`)
      .subscribe(
        response =>{
          this.user=response;
          console.log(this.user)
        },
        error =>{
          console.log(error);
        }
      )
  }
  

}
