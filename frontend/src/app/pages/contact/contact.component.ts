import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

interface Feedback{
  userId:string;
  email:string;
  subject :string;
  description:string
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {

  userId:string =''; 

  constructor(private httpClient:HttpClient , private router:Router,private route :ActivatedRoute){}

  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      this.userId=params['userId'];
      this.fd.userId=params['userId'];
    })
    
  }

  fd : Feedback = {
    userId:'',
    email:'',
    subject :'',
    description:''
  }

  feedback(){
    // this.httpClient.post(`http://localhost:8080/gym/users/${this.userId}/feedback`,this.fd)
    // .subscribe(
    //   response =>{
    //     window.alert("Feedback Sent Successfully");
    //     this.router.navigate([`${this.userId}/contactus`]);
    //   },
    //   error =>{
    //     console.log(error);
    //   }
    // )
    window.alert("Feedback Sent Successfully");
  }

}
