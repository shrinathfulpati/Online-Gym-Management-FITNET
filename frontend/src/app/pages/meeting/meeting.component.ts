import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { error } from 'console';

interface Request{
  senderRid:string,
  firstname :string,
  lastname :string,
  receiverRid:string,
  location:string,
  date:string,
  time:string
}

@Component({
  selector: 'app-meeting',
  templateUrl: './meeting.component.html',
  styleUrl: './meeting.component.css'
})
export class MeetingComponent implements OnInit {

  request : Request ={
    senderRid : '', 
    firstname  : '',
    lastname  : '', 
    receiverRid  : '',
    location : '',
    date : '',
    time :''
  }

  constructor( private route:ActivatedRoute , private httpClient : HttpClient ,private router:Router  ){}

  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      this.request.firstname = params['firstname'],
      this.request.lastname = params['lastname'],
      this.request.receiverRid = params['rrid'],
      this.request.senderRid = params['rid']
    }); 
  }

  onSubmit(){
    this.httpClient.post('http://localhost:8081/omw/users/request',this.request)
                      .subscribe(
                        response =>{
                          console.log(response)
                          window.alert("Meeting request sent successfully!");
                          this.router.navigate([`${this.request.senderRid}/welcome`]);
                        },
                        error =>{
                          console.log(error);
                        }
                      )
    
    
  }

}
