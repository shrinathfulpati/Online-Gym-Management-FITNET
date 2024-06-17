import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';


interface Trainer{

	firstname :string,
	
	lastname : string,
	
	email : string,
	
	mobileno : string
}

@Component({
  selector: 'app-addtrainer',
  templateUrl: './addtrainer.component.html',
  styleUrl: './addtrainer.component.css'
})
export class AddtrainerComponent {

  trainer : Trainer ={

	  firstname : '' ,
	
	  lastname : '' ,
	
	  email : '' ,
	
	  mobileno : '' 

  }

  constructor(private httpClient : HttpClient,private router : Router){}

 

  addTrainer():void{
    this.httpClient.post(`http://localhost:8080/trainers/`,this.trainer)
          .subscribe(
            response =>{
              window.alert("Trainer Addded Successfully");
              this.router.navigate(['/admintrainer']);
            },
            error =>{
              console.log(error);
            }
          )
  }

}
