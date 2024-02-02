import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  allStudentArray:[]=[]
  ngOnInit() {
    if (localStorage['students']) {
      this.allStudentArray = JSON.parse(localStorage.getItem('students')!);
      console.log(this.allStudentArray);
      
    }

  }
}
