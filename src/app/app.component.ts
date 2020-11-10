import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  btnStyle: string = "btn btn-primary";
  students: any [];
  studentCollection: any[] = [
    {name: "Tonya", favNumber: 743747, favColor: "Green"},
    {name: "Kali", favNumber: 239753, favColor: "Black"},
    {name: "Hung", favNumber: 3492735, favColor: "Grey"},
    {name: "Jack", favNumber: 32842, favColor: "Red"},
    {name: "Mark", favNumber: 34523, favColor: "Grey"},
    {name: "Christian", favNumber: 4, favColor: "Black"},
    {name: "Johnathan", favNumber: 74532, favColor: "Yellow"},
    {name: "Manami", favNumber: 294773, favColor: "Blue"},
    {name: "Tracy", favNumber: 54854, favColor: "Pink"},
    {name: "Elena", favNumber: 8766, favColor: "White"},
    {name: "Sarah", favNumber: 23835, favColor: "Red"},
    {name: "Marc", favNumber: 735345, favColor: "Green"},
    {name: "Greg", favNumber: 987324, favColor: "Forest Green"}
  ];

  title = 'student-list';

  getStudents(): void {
    this.students = this.studentCollection;
  }

  changeColor(): void{
    this.btnStyle = "btn btn-danger";
  }
}
