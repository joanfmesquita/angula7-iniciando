import { EmployeeService } from './../employee.service';

import { Component, OnInit, ElementRef,EventEmitter, Input, Output } from '@angular/core';
import { Employee } from '../employee.service';
import employees from '../employees';

declare const $;

@Component({
  selector: 'employee-delete-modal',
  templateUrl: './employee-delete-modal.component.html',
  styleUrls: ['./employee-delete-modal.component.css']
})
export class EmployeeDeleteModalComponent implements OnInit {

  
@Input()
employee: Employee;
@Output()
onDestroy: EventEmitter<Employee> = new EventEmitter<Employee>();


  constructor(private employeeService: EmployeeService, private element: ElementRef) {

   }

  ngOnInit() {
  }

destroy(){
  const copy =Object.assign( {}, this.employee)
this.employeeService.destroyEmployee(this.employee);
this.onDestroy.emit(copy);
this.hide();
}
private getDivModal(): HTMLElement{
  
  const nativeElement: HTMLElement = this.element.nativeElement;
return nativeElement.firstChild as HTMLElement;
}
show(){
  const divModal = this.getDivModal();
  $(divModal).modal('show');
}
hide(){
  const divModal = this.getDivModal();
  $(divModal).modal('hide');
}

}
