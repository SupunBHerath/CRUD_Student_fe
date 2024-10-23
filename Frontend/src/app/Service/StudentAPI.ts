import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class StudentAPIService {
    constructor(private http :HttpClient){}
  
    public saveStudent(student:any){
    return this.http.post("http://localhost:8080/student", student);
    }
    public getAllStudent(){
    return this.http.get<any[]>("http://localhost:8080/student");
    }
    public deleteStudent( id:number){
    return this.http.delete(`http://localhost:8080/student/${id}`);
    }
    public getStudentById( id:number){
    return this.http.get<any[]>(`http://localhost:8080/student/${id}`);
    }
    public updateStudent(student:any){
    return this.http.put(`http://localhost:8080/student/${student.id}`, student);
    }

}