import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

interface Trainer{

  trainerId :string ,

	firstname :string,
	
	lastname : string,
	
	email : string,
	
	mobileno : string
}

@Component({
  selector: 'app-trainers',
  templateUrl: './trainers.component.html',
  styleUrl: './trainers.component.css'
})
export class TrainersComponent {

  userId : string = '';

  trainers:Trainer[] = [];

  constructor(private httpClient:HttpClient , private router:Router,private route :ActivatedRoute){}

  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      this.userId=params['userId'];
    })
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

  addTrainer(trainerId:string){
    this.httpClient.post(`http://localhost:8080/gym/users/${this.userId}/trainers/${trainerId}`,null)
      .subscribe(
        response =>{
          window.alert("Trainer Booked Sucessfully! You can check in your profile.")
        },error=>{
          console.log(error);
          window.alert("Your are trying to book your current slot. Please check.")
        }
      )
  }
}
