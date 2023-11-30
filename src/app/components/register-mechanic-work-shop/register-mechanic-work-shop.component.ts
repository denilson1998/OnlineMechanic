import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { CategoryService } from 'src/app/services/category.service';
import { MechanicService } from 'src/app/services/mechanic.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register-mechanic-work-shop',
  templateUrl: './register-mechanic-work-shop.component.html',
  styleUrls: ['./register-mechanic-work-shop.component.css']
})
export class RegisterMechanicWorkShopComponent implements OnInit {
  name: any;
  lastname: any;
  ci: any;
  telephoneNumber: any;
  email: any;
  password: any;
  categoryId: any;
  categories: Array<any>;
  phoneNumber: any;
  constructor(private mechanicService: MechanicService, private categoryService: CategoryService,
              private authService: AuthService, private router: Router) { 
      this.categories = [];
      this.getListCategories();
  }

  ngOnInit(): void {
  }
  registerMechanic(){

    let mechanic = {
      name: this.name,
      categoryId: this.categoryId,
      roleId: sessionStorage.getItem("roleId"),
      userId: sessionStorage.getItem("userId")
    };
    
    console.log(mechanic);
    
    this.mechanicService.registerMechanic(mechanic).subscribe(
      {
        next: (res: any) => {
          console.log(res);
          
        },
        error: (error: any) => {
          console.log(error);
          
        }
      }
    );
  }
  
  getListCategories(){

    this.categoryService.getListCategories().subscribe(
      {
        next: (res: any) => {
          console.log(res);
          this.categories = res;
          
        },
        error: (error: any) => {
          console.log(error);
          
        }
      }
    );
  }
  change(){
    //console.log("Prueba");
  }
  registerClient(){
    let user = {
      name: this.name,
      email: this.email,
      password: this.password,
      address: "",
      phoneNumber: this.phoneNumber,
      roleId: 4
    }

    this.authService.registerUser(user).subscribe(
      {
        next: (res: any) => {
          console.log(res);
          this.registerMechanic();
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: "Mecanico registrado con exito!",
            showConfirmButton: false,
            timer: 2000
          });
          
        },
        error: (error: any) => {
          console.log(error);
        }
      }
    );
  }
}
