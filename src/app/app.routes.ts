import { Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminsignupComponent } from './adminsignup/adminsignup.component';
import { StudentsignupComponent } from './studentsignup/studentsignup.component';
import { DisplayComponent } from './display/display.component';
import { adminGuard } from './guards/admin.guard';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';

export const routes: Routes = [
    {path:'', component:NavbarComponent},
    {path:'adminsignup', component:AdminsignupComponent},
    {path:"adminlogin", component:AdminloginComponent},
    {path:'studentSignup', component:StudentsignupComponent},

    {path:'dashboard', children:[
        {path:'', component:DisplayComponent}
    ],canActivate:[adminGuard]},
    {path:'**', component:ErrorpageComponent}
];
