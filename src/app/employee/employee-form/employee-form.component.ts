import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { EmployeeService } from 'app/employee/employee.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent {

  constructor(private employeeService: EmployeeService) {
  }

  add(name: string) {
    this.employeeService.add(name);
  }
}
