import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-update-employee',
  standalone: true,
  imports: [FooterComponent,FormsModule,CommonModule,ReactiveFormsModule, RouterModule],
  templateUrl: './update-employee.component.html',
  styleUrl: './update-employee.component.css'
})
export class UpdateEmployeeComponent implements OnInit{
  ngOnInit(): void {
       const id = this.route.snapshot.paramMap.get('id');

  if (id) {
    this.service.getEmployeeById(id).subscribe((data: any) => {

      console.log(data); // 👀 check in console

      this.employee.patchValue({
        name: data.name,
        email: data.email,
        password: data.password
      });

    });
  }
  }
  constructor(
  private route: ActivatedRoute,
  private service: EmployeeService
) {}
  employee=new FormGroup({
      email:new FormControl('',[Validators.required,Validators.email]),
      name:new FormControl('',Validators.required),
      password:new FormControl('',[Validators.required,Validators.minLength(8)])
  })

  update(){

  }
}
