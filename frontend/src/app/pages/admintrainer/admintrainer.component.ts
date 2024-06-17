import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { error } from 'console';

interface Trainer{

  trainerId :string ,

	firstname :string,
	
	lastname : string,
	
	email : string,
	
	mobileno : string
}

@Component({
  selector: 'app-admintrainer',
  templateUrl: './admintrainer.component.html',
  styleUrl: './admintrainer.component.css'
})
export class AdmintrainerComponent implements OnInit {

  trainers:Trainer[] = [];

  constructor(private httpClient:HttpClient , private router:Router){}

  ngOnInit(): void {
    this.loadTrainer();
  }

  loadTrainer(){
    this.httpClient.get<Trainer[]>(`http://localhost:8080/trainers/`)
      .subscribe(
        response =>{
          this.trainers=response;
          console.log(this.trainers)
        },
        error =>{
          console.log(error);
        }
      )
  }

  add(){
    this.router.navigate(['/addtrainer']);
  }

  remove(trainerId :string){
    this.httpClient.post(`http://localhost:8080/trainers/${trainerId}/delete`,null)
          .subscribe(
            response =>{
              window.alert("Trainer Removed Successfully");
              this.loadTrainer();
            },
            error=>{
              console.log(error);
              
            }
          )
  }

  

}
