import { CommonModule } from '@angular/common';
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
  selector: 'app-display',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './display.component.html',
  styleUrl: './display.component.css'
})
export class DisplayComponent {

 id = 0
show:string | number = ''
allStudentArray:studentDetails[]=[]
ngOnInit() {
  if (localStorage['students']) {
    this.allStudentArray = JSON.parse(localStorage.getItem('students')!);
    console.log(this.allStudentArray);
  }

}

moveUser(id: number){
  console.log(id);
 let del = this.allStudentArray.filter((contact, index)=>index!=id)
  this.allStudentArray = del
  localStorage.setItem('students', JSON.stringify(this.allStudentArray))
}
 general:number = 0

firstName = ""
lastName= "";
email= "";
age= "";
address= "";
password= "";
matric=""


change(id:number){
this.general = id

}

saveChange(){
console.log(this.general);
let editDetails={
  firstName:this.firstName,
  lastName: this.lastName,
  email:this.email,
  age:this.age,
  address:this.address,
  password:this.password,
  matric:this.matric
}
console.log(editDetails);
this.allStudentArray.splice(this.general,1,editDetails)
localStorage.setItem('students', JSON.stringify(this.allStudentArray))
window.location.reload()
}
}
