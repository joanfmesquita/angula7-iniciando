import { Component, OnInit } from '@angular/core';
import employees from '../employees';
@Component({
  selector: 'employee-new',
  templateUrl: './employee-new.component.html',
  styleUrls: ['./employee-new.component.css']
})
export class EmployeeNewComponent implements OnInit {

  name = 'teste';
  salary = 600;
  bonus = 0;
  employees = employees;
  

  constructor() { 

    setTimeout(  () => {
      this.name = 'Joan Mesquita';
      
    },  10000);
  }
addEmployee(event){
console.log(event);
const bonusvalidacao = this.salary >= 1000 ? 0 : this.bonus;

  this.employees.push({name: this.name , salary: this.salary, bonus: bonusvalidacao});
  console.log(this.employees);

}

  ngOnInit() {
  }

}
