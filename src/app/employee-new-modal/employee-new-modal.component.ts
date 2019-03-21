
import { Component, OnInit, ElementRef,Output,EventEmitter } from '@angular/core';
import { Employee, EmployeeService } from '../employee.service';

declare const $;

@Component({
  selector: 'employee-new-modal',
  templateUrl: './employee-new-modal.component.html',
  styleUrls: ['./employee-new-modal.component.css']
})
export class EmployeeNewModalComponent implements OnInit {

  

employee: Employee = {
  name: '',
  salary: 0,
  bonus: 0,
};

@Output()
onSubmit: EventEmitter<Employee> = new EventEmitter<Employee>();


  constructor(private element: ElementRef, private employeesService: EmployeeService) {

   }

  ngOnInit() {
  }
private getDivModal(): HTMLElement{
  
  const nativeElement: HTMLElement = this.element.nativeElement;
return nativeElement.firstChild.firstChild as HTMLElement;
}
show(){
  const divModal = this.getDivModal();
  $(divModal).modal('show');
}

addEmployee(event){
  const copy = Object.assign('target: {}',this.employee);
  this.employeesService.addEmployee(copy);
  this.onSubmit.emit(copy);
  this.hide();
}

hide(){
  const divModal = this.getDivModal();
  $(divModal).modal('hide');
}

}
