import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { RegisterComponent } from "../register/register.component";
import {  TableComponent } from "../../component/table/table.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, RegisterComponent, TableComponent, TableComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
