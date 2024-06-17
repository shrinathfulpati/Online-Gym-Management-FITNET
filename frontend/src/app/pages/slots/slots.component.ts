import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';



interface Slot{
  slotId : string ,
  startTime :string,
  endTime :string
}

@Component({
  selector: 'app-slots',
  templateUrl: './slots.component.html',
  styleUrl: './slots.component.css'
})


export class SlotsComponent {

  userId :string ='';

  slots:Slot[] = [];

  constructor(private httpClient:HttpClient , private router:Router,private route :ActivatedRoute){}

  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      this.userId=params['userId'];
    })
    this.loadSlot();
  }

  loadSlot(){
    this.httpClient.get<Slot[]>(`http://localhost:8080/slots/`)
      .subscribe(
        response =>{
          this.slots=response;
          console.log(this.slots)
        },
        error =>{
          console.log(error);
        }
      )
  }

  addSlot(slotId:string){
    this.httpClient.post(`http://localhost:8080/gym/users/${this.userId}/slots/${slotId}`,null)
      .subscribe(
        response =>{
          window.alert("Slot Booked Sucessfully! You can check in your profile.")
        },error=>{
          console.log(error);
          window.alert("Your are trying to book your current slot. Please check.")
        }
      )
  }

}
