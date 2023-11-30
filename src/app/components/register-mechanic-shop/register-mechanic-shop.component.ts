import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register-mechanic-shop',
  templateUrl: './register-mechanic-shop.component.html',
  styleUrls: ['./register-mechanic-shop.component.css']
})
export class RegisterMechanicShopComponent implements OnInit {
  name: any;
  phoneNumber: any; 
  email: any;
  password: any;
  address: any;
  roleId: any;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }
  registerClient(){
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
            title: "Taller Mecanico registrado con exito",
            showConfirmButton: false,
            timer: 2000
          })
          
        },
        error: (error: any) => {
          console.log(error);
        }
      }
    );
  }
}
