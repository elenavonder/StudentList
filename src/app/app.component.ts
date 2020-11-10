import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  students: any [] = [];
  studentCollection: any[] = [
    {name: "Tonya", favNumber: 743747, favColor: "Green"},
    {name: "Jack", favNumber: 32842, favColor: "Red"},
    {name: "Kali", favNumber: 239753, favColor: "Black"},
    {name: "Hung", favNumber: 3492735, favColor: "Grey"},
    {name: "Mark", favNumber: 34523, favColor: "Grey"},
    {name: "Christian", favNumber: 4, favColor: "Black"},
    {name: "Johnathan", favNumber: 74532, favColor: "Yellow"},
    {name: "Manami", favNumber: 294773, favColor: "Blue"},
    {name: "Tracy", favNumber: 54854, favColor: "Pink"},
    {name: "Marc", favNumber: 735345, favColor: "Green"},
    {name: "Greg", favNumber: 987324, favColor: "Green"},
    {name: "Elena", favNumber: 8766, favColor: "White"}
  ];

  title = 'student-list';

  getStudents(): void {
    this.students = this.studentCollection;
  }
}
