import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseURL from './helper';
import { UserInfo } from '../models/userinfo.model';
import { Observable } from 'rxjs';
import { UserRegisteration } from '../models/userregisteration.model';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PersonalInfo } from '../models/personalinfo.model';
import { EducationInfo } from '../models/educationinfo.model';
import { FamilyInfo } from '../models/familyinfo.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8081/omw';

  constructor(
    private http:HttpClient,private router: Router, private snackBar: MatSnackBar

  ) { }

  submitUser(userRegistration: UserRegisteration): Observable<any> {
    return this.http.post(`${this.apiUrl}/users/register`, userRegistration);
  }

  submitUserInfo(userRegistrationId: string, userInfo: UserInfo): Observable<any> {
    return this.http.post(`${this.apiUrl}/users/${userRegistrationId}/userinfo`, userInfo);
  }

  submitPersonalInfo(userRegistrationId: string, personalInfo: PersonalInfo): Observable<any> {
    return this.http.post(`${this.apiUrl}/users/${userRegistrationId}/personalinfo`, personalInfo);
  }

  submitEducationInfo(userRegistrationId: string, educationInfo: EducationInfo): Observable<any> {
    return this.http.post(`${this.apiUrl}/users/${userRegistrationId}/educationinfo`, educationInfo);
  }

  submitFamilyInfo(userRegistrationId: string, familyinfo: FamilyInfo): Observable<any> {
    return this.http.post(`${this.apiUrl}/users/${userRegistrationId}/familyinfo`,familyinfo );
  }


  goToUserInfo(userRegistrationId: string) {
    this.router.navigate([`${userRegistrationId}/userinfo`]);
  }

  goToPersonalInfo(userRegistrationId: string) {
    this.router.navigate([`${userRegistrationId}/personalinfo`]);
  }

  goToFamilyInfo(userRegistrationId: string) {
    this.router.navigate([`${userRegistrationId}/familyinfo`]);
  }

  goToEducationInfo(userRegistrationId: string) {
    this.router.navigate([`${userRegistrationId}/educationinfo`]);
  }

  getAllBridesUserInfo() : Observable<UserInfo[]>{
    return this.http.get<UserInfo[]>(`${this.apiUrl}/users/brides`);
  }

  getAllGroomsUserInfo() : Observable<UserInfo[]>{
    return this.http.get<UserInfo[]>(`${this.apiUrl}/users/grooms`);
  }

  goToHome() {
    this.router.navigate([`/`]);
  }

  displayVerificationMessage(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 1000
    });
  }

  public addUser(user:any){
      return this.http.post(`${baseURL}/user/`,user);
  }
}
