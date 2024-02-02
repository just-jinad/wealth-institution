import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
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
  imports: [CommonModule],
  templateUrl: './display.component.html',
  styleUrl: './display.component.css'
})
export class DisplayComponent {

 
show:string | number = ''
allStudentArray:studentDetails[]=[]
ngOnInit() {
  if (localStorage['students']) {
    this.allStudentArray = JSON.parse(localStorage.getItem('students')!);
    console.log(this.allStudentArray);
  }

}
}
