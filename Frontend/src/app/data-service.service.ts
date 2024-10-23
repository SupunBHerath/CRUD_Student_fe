import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface Student {
  name: string;
  age: number;
  address: string;
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private dataSource = new BehaviorSubject<Student[]>([]); // BehaviorSubject holding an array of Student objects
  currentData = this.dataSource.asObservable();

  constructor() {}

  // Method to update data (adds a new student to the array)
  addStudent(student: Student) {
    const currentStudents = this.dataSource.getValue();  // Get current value (array of students)
    this.dataSource.next([...currentStudents, student]);  // Push new student into the array
  }
}
