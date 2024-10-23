import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TableComponent } from '../../component/table/table.component';
import { StudentAPIService } from '../../Service/StudentAPI';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  constructor(private studentAPI:StudentAPIService){}

  public student = {
    s_name: undefined,
    s_age: undefined,
    s_contact_number: undefined,
    g_name: undefined,
    g_address: undefined,
    g_contact_number: undefined,
  };
  public clear() {
    this.student = {
      s_name: undefined,
      s_age: undefined,
      s_contact_number: undefined,
      g_name: undefined,
      g_address: undefined,
      g_contact_number: undefined,
    };
  }
  public register() {
    this.studentAPI.saveStudent(this.student)
    .subscribe({
      next: (response) => {
        alert("Customer successfully registered! ")
        this.clear();
      },
      error: (error) => {
        alert("Register fail! ")
        console.error(error);
      }
    })
    this.clear();
  }
}
