import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { routing } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { RegisterMechanicWorkShopComponent } from './components/register-mechanic-work-shop/register-mechanic-work-shop.component';
import { RegisterCategoryComponent } from './components/register-category/register-category.component';
import { AssistanceComponent } from './components/assistance/assistance.component';
import { RegisterMechanicShopComponent } from './components/register-mechanic-shop/register-mechanic-shop.component';
import { MapsComponent } from './components/maps/maps.component';
import { ApplicationComponent } from './components/application/application.component';
import { RegisterApplicationComponent } from './components/register-application/register-application.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    RegisterMechanicWorkShopComponent,
    RegisterCategoryComponent,
    AssistanceComponent,
    RegisterMechanicShopComponent,
    MapsComponent,
    ApplicationComponent,
    RegisterApplicationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
