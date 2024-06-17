import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';

import { HomeComponent } from './pages/home/home.component';



import { LoginComponent } from './pages/login/login.component';

import { MatchDetailsComponent } from './pages/match-details/match-details.component';
import { AdmindashboardComponent } from './pages/admindashboard/admindashboard.component';
import { MeetingComponent } from './pages/meeting/meeting.component';

import { NavbarComponent } from './components/navbar/navbar.component';
import { AdminslotComponent } from './pages/adminslot/adminslot.component';
import { AdmintrainerComponent } from './pages/admintrainer/admintrainer.component';
import { SlotsComponent } from './pages/slots/slots.component';
import { TrainersComponent } from './pages/trainers/trainers.component';
import { AddtrainerComponent } from './pages/addtrainer/addtrainer.component';
import { UserhomeComponent } from './pages/userhome/userhome.component';
import { UserprofileComponent } from './pages/userprofile/userprofile.component';
import { ContactComponent } from './pages/contact/contact.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';





const routes: Routes = [
  { path: 'adminslot' , component:AdminslotComponent},
  { path: 'admintrainer' , component:AdmintrainerComponent},
  { path: 'addtrainer' , component:AddtrainerComponent},
  { path: 'adminhome' , component:UserhomeComponent},
  { path: '',component:WelcomeComponent},

  { path: ':userId/slots' , component:SlotsComponent},
  { path: ':userId/trainers' , component:TrainersComponent },
  { path: ':userId/home' , component:HomeComponent},
  { path: ':userId/userprofile' , component:UserprofileComponent},
  { path: ':userId/contactus' , component:ContactComponent},
  

  { path: 'register', component: RegisterComponent , pathMatch: 'full' },

  { path: ':SuserRegisterationId/matchdetails/:userRegisterationId',component:MatchDetailsComponent },
  { path: 'admindashboard' , component : AdmindashboardComponent},
  { path: 'meeting/:rid/:firstname/:lastname/:rrid' , component : MeetingComponent},

  {path : 'navbar' , component:NavbarComponent},
  
 
  {
    path:'login',
    component:LoginComponent,
    pathMatch:'full',
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
