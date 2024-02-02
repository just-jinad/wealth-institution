import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
  interface studentDetails{
firstName: String;
lastName: String;
email: String;
age: String;
address: String;
password: String;
matric:String
  }
@Component({
  selector: 'app-studentsignup',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './studentsignup.component.html',
  styleUrl: './studentsignup.component.css'
})
export class StudentsignupComponent {
  firstName= "";
  lastName= "";
  email= "";
  age= "";
  address= "";
  password= "";
  message="";
  matric=""

  allStudentArray:studentDetails[]=[]
  ngOnInit() {
    if (localStorage['students']) {
      this.allStudentArray = JSON.parse(localStorage.getItem('students')!);
      console.log(this.allStudentArray);
      
    }

  }
  signUser() {
    let studentObj = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      address: this.address,
      age: this.age,
      matric: this.matric,
      password: this.password,
  };
  console.log( studentObj );

  this.allStudentArray.push(studentObj)
  localStorage.setItem('students', JSON.stringify(this.allStudentArray));
  alert("Details has been Stored")
  }
}
