import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: any;
  password: any;
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }
  
  login(){
    let user = {
      email: this.email,
      password: this.password
    }
    console.log(user);
    
    this.authService.login(user).subscribe( 
      {
        next: (res: any) => {

          console.log(res);
          sessionStorage.setItem("userId", res.id);
          sessionStorage.setItem("roleId", res.roleId);

          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Usuario Logeado con Exito!',
            showConfirmButton: false,
            timer: 2000
          })

          setTimeout(() => {
            this.router.navigate(["/home"]);
          }, 2100);
        },
        error: (error: any) => {
          Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Credenciales incorrectas!',
            showConfirmButton: false,
            timer: 2000
          })
          console.log(error);
        }
      }
    );
    
  }
  redirect(id: any){
    if (id == 1) {
      this.router.navigate(["/registerUser"]);  
      sessionStorage.setItem("typeRegisterUser", id);
    }else{
      sessionStorage.setItem("typeRegisterUser", id);
      this.router.navigate(["/registerUser"]);
    }
    
  }
}
