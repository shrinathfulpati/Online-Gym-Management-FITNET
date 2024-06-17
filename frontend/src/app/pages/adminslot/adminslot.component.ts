import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Slot{
  slotId : string ,
  startTime : string ,
  endTime : string 
}

@Component({
  selector: 'app-adminslot',
  templateUrl: './adminslot.component.html',
  styleUrl: './adminslot.component.css'
})
export class AdminslotComponent {

  slot : Slot ={
    slotId : '' ,
    startTime : '' ,
    endTime : ''
  }

  addSlot(){
    this.httpClient.post('http://localhost:8080/slots/',this.slot)
      .subscribe(
        response =>{
          window.alert("Slot Added Successfully !")
          this.loadSlot();
        }
      )
  }

  slots:Slot[] = [];

  constructor(private httpClient:HttpClient , private router:Router){}

  ngOnInit(): void {
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

  remove(trainerId :string){
    this.httpClient.post(`http://localhost:8080/slots/${trainerId}/delete`,null)
          .subscribe(
            response =>{
              window.alert("Slot Removed Successfully");
              this.loadSlot();
            },
            error=>{
              console.log(error);
              
            }
          )
  }

}
