import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { MaskPasswordPipe } from '../../pipes/mask-password.pipe';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule, MaskPasswordPipe],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{
  
  employees:any;
  constructor(private service:EmployeeService){}
  
  ngOnInit(): void {
    this.getAllEmployee();
  }

  getAllEmployee(){
    this.service.getAllEmployee().subscribe(res=>{
      this.employees = res;
    })
  }

  deleteEmployee(id:any){
    this.service.deleteEmployee(id).subscribe(res=>{
      if(res){
        alert('Employee Deleted Successfully');
      }else{
        alert('Something went wrong');
      }
    })
  }
}
