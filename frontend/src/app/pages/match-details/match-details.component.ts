import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { param } from 'jquery';
import { response } from 'express';

interface User {
  rid: string;
  firstname: string;
  lastname: string;
  gender: string;
  age: string;
  bloodGroup: string;
  educationLevel: string;
  educationFeild: string;
  familyStatus: string;
  familyType: string;
  fathername: string;
  image : string;
}


@Component({
  selector: 'app-match-details',
  templateUrl: './match-details.component.html',
  styleUrl: './match-details.component.css'
})
export class MatchDetailsComponent implements OnInit {

  srid:string='';

  rid:string='';

  user : User = {
    rid :'',
    firstname : '',
    lastname : '',
    gender: '',
    age:  '',
    bloodGroup:  '',
    educationLevel:  '',
    educationFeild: '',
    familyStatus:  '',
    familyType:  '',
    fathername: '',
    image : ''
  }
  constructor(private httpClient:HttpClient,private route:ActivatedRoute, private router:Router){}

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      this.rid=params['userRegisterationId'],
      this.srid=params['SuserRegisterationId']
    })
    this.httpClient.get<User>(`http://localhost:8081/omw/users/matchdetails/${this.rid}`)
      .subscribe(
        response =>{
          this.user =response;
        },
        error =>{
          console.log(error)
        }
      )
  }

  meeting(firstname:string,lastname:string,rrid:string){
    this.router.navigate([`meeting/${this.srid}/${firstname}/${lastname}/${rrid}`]);
  }


  interested(rrid:string){
    console.log(this.srid +" "+rrid);
    this.httpClient.get<any>(`http://localhost:8081/omw/users/interested/${this.srid}/${rrid}`)
      .subscribe(
        response=>{
          window.alert("Notified to the Match");
        }
      )
  }
  
  


}
