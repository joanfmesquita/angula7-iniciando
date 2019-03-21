import { Employee } from './../employee.service';
import { Component, OnInit,ViewChild } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { EmployeeNewModalComponent } from '../employee-new-modal/employee-new-modal.component';
import { EmployeeEditModalComponent } from '../employee-edit-modal/employee-edit-modal.component';
import { EmployeeDeleteModalComponent } from '../employee-delete-modal/employee-delete-modal.component';

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
 employee: Employee;
  showMessageSuccess = false;
  employeeToEdit: Employee;
  employeeToDelete: Employee;
  @ViewChild(EmployeeNewModalComponent) // pega a referencia de um elemento
  employeeNewModal: EmployeeNewModalComponent;

  @ViewChild(EmployeeEditModalComponent) // pega a referencia de um elemento
  employeeEditModal: EmployeeEditModalComponent;

  @ViewChild(EmployeeDeleteModalComponent) // pega a referencia de um elemento
  employeeDeleteModal: EmployeeDeleteModalComponent;

  constructor(public employeesService: EmployeeService) { 
   
  }

  ngOnInit() {
  }
  getSalaryColor(employee){
return employee.salary > 1000 ? 'blue' : 'green';

  }

  openNewModal(){
    this.employeeNewModal.show();
  }
  openEditModal(employee: Employee){
    this.employeeToEdit = employee;
    this.employeeEditModal.show();
  }
  openDeleteModal(employee: Employee){
    this.employeeToDelete = employee;
    this.employeeDeleteModal.show();
  }

  onNewEmployee(employee: Employee){
    this.employee = employee;
    this.showMessageSuccess = true;
  }
  onEditEmployee(employee: Employee){
    console.log(employee);
  }
  onDestroyEmployee(employee: Employee){
    console.log(employee);
  }

}
