import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeMainComponent } from './components/home-main/home-main.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuMainComponent } from './components/menu-main/menu-main.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReservationComponent } from './components/reservation/reservation.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { EventsComponent } from './components/events/events.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeMainComponent,
    FooterComponent,
    MenuMainComponent,
    ReservationComponent,
    AboutUsComponent,
    EventsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
  ],
  providers: [
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'restaurant-webapp-5d9ee',
        appId: '1:104748378984:web:ce320f25b834dd5d4e84dd',
        storageBucket: 'restaurant-webapp-5d9ee.firebasestorage.app',
        apiKey: 'AIzaSyBI_Bk5K57G_6-CvwFSUBmIVvbX7w-0CgU',
        authDomain: 'restaurant-webapp-5d9ee.firebaseapp.com',
        messagingSenderId: '104748378984',
        measurementId: 'G-0YHNN8NWQ1',
        // projectNumber: '104748378984',
        // version: '2',
      })
    ),
    provideFirestore(() => getFirestore()),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
