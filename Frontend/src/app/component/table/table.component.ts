import { Component, OnInit } from '@angular/core';
import { DecimalPipe, CommonModule } from '@angular/common';
import { StudentAPIService } from '../../Service/StudentAPI';
import { EditFormComponent } from "../edit-form/edit-form.component";
import { FormsModule } from '@angular/forms';

interface Student {
    id: number;
    s_name: string ;
    s_age: number;
    s_contact_number: string;
    g_address: string;
    g_name: string;
    g_contact_number: string;
}

@Component({
    selector: 'app-table',
    standalone: true,
    imports: [DecimalPipe, CommonModule, EditFormComponent,FormsModule],
    templateUrl: './table.component.html',
})
export class TableComponent implements OnInit {
    student: Student[] = [];
    public vStudent: Student = {
        id: 0,
        s_name: '',
        s_age: 0,
        s_contact_number: '',
        g_address: '',
        g_name: '',
        g_contact_number: ''
    };
    public eStudent: Student = {
        id: 0,
        s_name: '',
        s_age: 0,
        s_contact_number: '',
        g_address: '',
        g_name: '',
        g_contact_number: ''
    };

    constructor(private studentAPI: StudentAPIService) {}

    ngOnInit(): void {
        this.loader();
    }

    // Fetch student list
    public loader() {
        this.studentAPI.getAllStudent()
        .subscribe({
          next: (response) => {
            this.student = response;
          },
          error: (error) => {
            console.error(error);
          }
        });
    }

    // Delete a student
    public delete(id: number) {
        this.studentAPI.deleteStudent(id)
        .subscribe({
          next: (response) => {
            if(response === true) {
                alert("Delete Successfully.");
                this.loader();
            } else {
                alert("Delete Failed.");
            }
          },
          error: (error) => {
            console.error(error);
          }
        });
    }

    public viewStudent(student: Student) {
        this.vStudent = student;  
    }
    public editStudent(student: Student) {
        this.eStudent = student;  
    }
    public updateStudent() {
       this.studentAPI.updateStudent(this.eStudent)
       .subscribe({
          next: (response) => {
            if(response) {
                alert("Update Successfully.");
                this.loader();
            } else {
                alert("Update Failed.");
            }
          },
          error: (error) => {
            console.error(error);
          }
        });
       
    }
}
