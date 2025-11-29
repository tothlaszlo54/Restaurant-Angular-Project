import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeMainComponent } from './components/HomePage/home-main/home-main.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuMainComponent } from './components/menu-main/menu-main.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, HomeMainComponent, FooterComponent, MenuMainComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
