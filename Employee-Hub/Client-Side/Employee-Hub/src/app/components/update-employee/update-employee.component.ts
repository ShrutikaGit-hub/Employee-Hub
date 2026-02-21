import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit{

  ngOnInit(): void {
      
  }

  employee=new FormGroup({
      email:new FormControl('',[Validators.required,Validators.email]),
      name:new FormControl('',Validators.required),
      password:new FormControl('',[Validators.required,Validators.minLength(8)])
  })

  update(){

  }
}
