import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
interface adminDetails{
  firstName: String;
  lastName: String;
  email: String;
  age: String;
  address: String;
  password: String;
 adminId:number
    }
@Component({
  selector: 'app-adminsignup',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './adminsignup.component.html',
  styleUrl: './adminsignup.component.css'
})
export class AdminsignupComponent {
  constructor(public routes: Router){ }
  firstName= "";
  lastName= "";
  email= "";
  age= "";
  address= "";
  password= "";
  adminId:any
  
 allAdminArray: adminDetails[]=[]

  signAdmin(){
    let studentObj = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      address: this.address,
      age: this.age,
      password: this.password,
      adminId:this.adminId
  };
  console.log( studentObj );

  this.allAdminArray.push(studentObj)
  localStorage.setItem('admin', JSON.stringify(this. 
    allAdminArray));

    this.routes.navigate(['adminlogin'])
  }
}
