import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { HomeComponent } from "./components/home/home.component";
import { RegisterComponent } from "./components/register/register.component";
import { RegisterCategoryComponent } from './components/register-category/register-category.component';
import { RegisterMechanicWorkShopComponent } from "./components/register-mechanic-work-shop/register-mechanic-work-shop.component";
import { AssistanceComponent } from "./components/assistance/assistance.component";
import { RegisterMechanicShopComponent } from "./components/register-mechanic-shop/register-mechanic-shop.component";
import { MapsComponent } from './components/maps/maps.component';
import { ApplicationComponent } from "./components/application/application.component";
import { RegisterApplicationComponent } from "./components/register-application/register-application.component";

const routes: Routes = [
    {path: '', redirectTo:'/login' , pathMatch:'full'},
    {path: 'login', component: LoginComponent},
    {path: 'registerUser', component: RegisterComponent},
    {path: 'home', component: HomeComponent},
    {path: 'registerCategory', component: RegisterCategoryComponent},
    {path: 'registerMechanic', component: RegisterMechanicWorkShopComponent},
    {path: 'registerMechanicShop', component: RegisterMechanicShopComponent},
    {path: 'asistance', component: AssistanceComponent},
    {path: 'maps', component: MapsComponent},
    {path: 'showApplications', component: ApplicationComponent},
    {path: 'registerApplications', component: RegisterApplicationComponent},
    {path: '**', redirectTo:'/login', pathMatch:'full'}
];

export const routing = RouterModule.forRoot(routes);