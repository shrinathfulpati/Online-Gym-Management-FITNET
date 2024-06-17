import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { error } from 'console';


interface User{
  userId : string 
}


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
  email:string ='' ;
  password:string ='' ;
  
  userExists: boolean = false;

  user : User ={
    userId: ''
  }

  constructor(private authService: AuthService,private router: Router,private snack:MatSnackBar , private httpClient:HttpClient) { }



  onLogin() {

    if(this.email === 'admin01@gmail.com' && this.password === 'Admin@123'){
      this.router.navigate(['/adminhome'])
    }else{

    const formData =  new FormData();
    formData.append("email",this.email);
    formData.append("password",this.password);
    this.httpClient.post<User>('http://localhost:8080/gym/users/login',formData)
      .subscribe(
        response=>{
          console.log(response);
          this.user = response;
          this.router.navigate([`${this.user.userId}/home`]);
        },
        error =>{
          console.log(error)
          this.snack.open("Invalid Credentials!",'',{duration:3000, verticalPosition:'top' })
        }
      )

    }

  }
  
  // onSubmit(): void {

  //   if(this.login.email === "bandhanadmin01@gmail.com" && this.login.password === "Admin123"){
  //     this.router.navigate(['/admindashboard']);
  //   }else{

  //   const formData = new FormData();
  //   formData.append("email",this.login.email);
  //   formData.append("password",this.login.password)


  //   this.httpClient.post<User>(`http://localhost:8081/omw/users/login`,formData)
  //     .subscribe(
  //       response =>{
  //         console.log(response)
  //         this.userRegisterationId = response.userRegisterationId;
  //         this.router.navigate([`${this.userRegisterationId}/dashboard`]);
  //       },
  //       error=>{
  //         this.snack.open("User not found!",'',{duration:3000,
  //         verticalPosition:'top'});
  //         console.log("Error : "+error);
  //         console.log("Invalid Credentials")
  //       }
  //     )
  //   }

    // this.authService.getUserByEmail(this.email).subscribe(
    //   (user) => {
    //     if (user !== null) {
    //       this.userExists = true;
    //       console.log('User found:', user);
    //       sessionStorage.setItem('userId', user.id);
    //       this.router.navigate(['/dashboard']);
    //     } else {
    //       this.userExists = false;
    //       console.log('User not found');
          
    //       this.snack.open("User not found!",'',{duration:3000,
    //         verticalPosition:'top',
           
          
    //        })
    //     }
    //   },
    //   (error) => {
    //     console.error('Error fetching user:', error);
    //     // Handle error and display message to the user
    //   }
    // );
  

}
