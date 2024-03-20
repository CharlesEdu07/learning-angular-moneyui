import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  //styleUrls: ['./employee-card.component.css']
  styles: [`
    .card-block {
      text-transform: uppercase;
      color: blue;
    }
  `]
})
export class EmployeeCardComponent {
  @Input() employee: any;
}
