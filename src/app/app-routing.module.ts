import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeMainComponent } from './components/HomePage/home-main/home-main.component';
import { MenuMainComponent } from './components/menu-main/menu-main.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { EventsComponent } from './components/events/events.component';

const routes: Routes = [
  { path: '', component: HomeMainComponent },
  { path: 'menu', component: MenuMainComponent },
  { path: 'reservation', component: ReservationComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'events', component: EventsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
