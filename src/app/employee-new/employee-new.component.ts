import { EmployeeService, Employee } from './../employee.service';
import { Component, OnInit } from '@angular/core';
import employees from '../employees';

@Component({
  selector: 'employee-new',
  templateUrl: './employee-new.component.html',
  styleUrls: ['./employee-new.component.css']
})
export class EmployeeNewComponent implements OnInit {
employee: Employee = {
  name: '',
  salary: 600,
  bonus: 0,
}
  

  constructor(private employeesService: EmployeeService) { 

    /* setTimeout(  () => {
      this.name = 'Joan Mesquita';
      
    },  10000); */
  }
addEmployee(event){
  const copy = Object.assign('target: {}',this.employee);
  this.employeesService.addEmployee(copy);
 
}

  ngOnInit() {
  }

}
