import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { error } from 'console';

interface User{
  
  userId : string ,
	
	firstname : string ,
	
	lastname : string ,
	
	email : string ,
	
	password : string ,
	
	mobileno  : string 

}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent  {

  user:User = {
        userId : '' ,
	      firstname : '' ,
        lastname : '' ,
        email : '' ,
        password : '' ,
        mobileno  : '' 
        }

  constructor(private httpClient : HttpClient , private router :Router ){}

  register(){
    console.log(this.user)
    this.httpClient.post(`http://localhost:8080/gym/users/`,this.user)
    .subscribe(
      response =>{
        alert("Registeration Successfull! Verfication Email sent to your mail.");
        this.router.navigate(['/login']);
      },
      error =>{

      }
    )
  }

}
