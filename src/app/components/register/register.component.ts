import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name: any;
  phoneNumber: any; 
  email: any;
  password: any;
  address: any;
  roleId: any;
  typeRegisterUser: any;
  constructor(private router: Router, private authService: AuthService) { 
    this.typeRegisterUser = +sessionStorage.getItem("typeRegisterUser")!;
  }

  ngOnInit(): void {
  }

  registerClient(){
    let user = {
      name: this.name,
      email: this.email,
      password: this.password,
      address: this.address,
      phoneNumber: this.phoneNumber,
      roleId: 2
    }

    this.authService.registerUser(user).subscribe(
      {
        next: (res: any) => {
          console.log(res);
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: "Usuario registrado con exito",
            showConfirmButton: false,
            timer: 1500
          })
           setTimeout(() => {
            this.router.navigate(["/Login"]);
           }, 1550);
          
        },
        error: (error: any) => {
          console.log(error);
        }
      }
    );
  }

  registerMechanicalWorkShop(){
    let user = {
      name: this.name,
      email: this.email,
      password: this.password,
      address: this.address,
      phoneNumber: this.phoneNumber,
      roleId: 3
    }

    this.authService.registerUser(user).subscribe(
      {
        next: (res: any) => {
          console.log(res);
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: "Usuario registrado con exito",
            showConfirmButton: false,
            timer: 1500
          })
           setTimeout(() => {
            this.router.navigate(["/Login"]);
           }, 1550);
          
        },
        error: (error: any) => {
          console.log(error);
        }
      }
    );
  }
}
