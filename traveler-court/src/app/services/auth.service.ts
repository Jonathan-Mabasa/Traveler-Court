import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl ='http://localhost:5050/users/'

  constructor(private Http:HttpClient) { }



  set_register(register_data:any){
    return this.Http.post(`${this.baseUrl}register`,register_data)
  }

  set_employee(createUser:any){
    return this.Http.post(`${this.baseUrl}createUser`,createUser)
  }


  set_login(login_data:any){
    return this.Http.post(`${this.baseUrl}login`,login_data)
  }

  get_All_Users(){

    return this.Http.get(`${this.baseUrl}/getAllUsers`)
  }
  
}






