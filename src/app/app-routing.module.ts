import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeMainComponent } from './components/HomePage/home-main/home-main.component';
import { MenuMainComponent } from './components/menu-main/menu-main.component';

const routes: Routes = [
  { path: '', component: HomeMainComponent },
  { path: 'menu', component: MenuMainComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
