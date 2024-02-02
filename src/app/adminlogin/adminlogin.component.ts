import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
interface alluser {
  email: String;
  password: String;
}
@Component({
  selector: 'app-adminlogin',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './adminlogin.component.html',
  styleUrl: './adminlogin.component.css'
})
export class AdminloginComponent {
constructor(public routes: Router){}

  email = '';
  password = '';
  // message=""
  verifyAdmin: alluser[] = [];
  ngOnInit() {
    this.verifyAdmin = JSON.parse(localStorage['admin']);
    console.log(this.verifyAdmin);
  }


loginBtn(){
  let currentAdmin = this.verifyAdmin.find((admin, index)=>this.email == admin.email && this.password == admin.password)
  console.log(currentAdmin);

  if (currentAdmin!==undefined) {
    let currentIndex = this.verifyAdmin.indexOf(currentAdmin) 
    console.log(currentAdmin);
    
    localStorage.setItem("current_admin", JSON.stringify(currentAdmin))
    alert("Login Successful")
    this.routes.navigate(['/dashboard'])
}
}
}
