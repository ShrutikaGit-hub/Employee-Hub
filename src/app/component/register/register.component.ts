import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  imports: [FooterComponent,FormsModule,CommonModule,ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

    constructor(private service:EmployeeService, private router:Router){}

    employee=new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email]),
    name:new FormControl('',Validators.required),
    password:new FormControl('',[Validators.required,Validators.minLength(8)])
})

register(){
  this.service.register(this.employee.value).subscribe((res: any)=>{
    if(res){
      alert('Employee Added !');
      this.router.navigateByUrl('/login')
    }else{
      alert('Something went wrong !');
      this.router.navigateByUrl('/welcome')
    }
  })
}
}
