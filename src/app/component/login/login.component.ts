import { Component } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Router } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [FooterComponent,FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private service:EmployeeService, private router:Router){  }
  userLogin={
    username:'',
    password:''
  }

  login(){
    this.service.login(this.userLogin).subscribe(res=>{
      if(res!=null){
        this.router.navigateByUrl('dashboard');
      }else{
        alert('Invalid Credentials !');
      }
    });
  }
}
