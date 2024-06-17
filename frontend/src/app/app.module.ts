import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RegisterComponent } from './pages/register/register.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HomeComponent } from './pages/home/home.component';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

import { NavbarComponent } from './components/navbar/navbar.component';


import { LoginComponent } from './pages/login/login.component';
import { MatchDetailsComponent } from './pages/match-details/match-details.component';
import { AdmindashboardComponent } from './pages/admindashboard/admindashboard.component';
import { MeetingComponent } from './pages/meeting/meeting.component';

import { TrainersComponent } from './pages/trainers/trainers.component';
import { SlotsComponent } from './pages/slots/slots.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AdminslotComponent } from './pages/adminslot/adminslot.component';
import { AdmintrainerComponent } from './pages/admintrainer/admintrainer.component';
import { AdminnavbarComponent } from './components/adminnavbar/adminnavbar.component';
import { AddtrainerComponent } from './pages/addtrainer/addtrainer.component';
import { AdminhomeComponent } from './pages/adminhome/adminhome.component';
import { UserhomeComponent } from './pages/userhome/userhome.component';
import { UserprofileComponent } from './pages/userprofile/userprofile.component';
import { ContactComponent } from './pages/contact/contact.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HomeComponent,
 
    NavbarComponent,

    LoginComponent,
    MatchDetailsComponent,
    AdmindashboardComponent,
    MeetingComponent,

    TrainersComponent,
    SlotsComponent,
    ProfileComponent,
    AdminslotComponent,
    AdmintrainerComponent,
    AdminnavbarComponent,
    AddtrainerComponent,
    AdminhomeComponent,
    UserhomeComponent,
    UserprofileComponent,
    ContactComponent,
    WelcomeComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatDatepickerModule,
    MatTabsModule,
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}