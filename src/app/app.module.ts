import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmployeeCardComponent } from './employee-card/employee-card.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { AbbreviatedEmployeeService, EmployeeService } from './employee.service';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeCardComponent,
    EmployeeFormComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [
    { provide: EmployeeService, useClass: AbbreviatedEmployeeService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
