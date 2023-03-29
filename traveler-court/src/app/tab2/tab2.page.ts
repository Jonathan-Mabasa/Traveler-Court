import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

 //======================properties=======================
 registerForm:UntypedFormGroup = new UntypedFormGroup({
  email: new UntypedFormControl(),
  password: new UntypedFormControl(),
  ConfirmPassword: new UntypedFormControl()
})

user_data:any

//======================methods==========================

set_registerForm(){

   const user = {
     email:this.registerForm.value.email,
     password:this.registerForm.value.password,
     ConfirmPassword:this.registerForm.value.ConfirmPassword
   }


   console.table(user)

  
  this.auth.set_register(user).subscribe((my_data)=>{
    console.log("From the Service",my_data)

    this.path.navigate(['/dash'])

  })
}

//======================defaults=========================
constructor(private auth:AuthService,private path:Router) { }

ngOnInit(): void {
}
}
