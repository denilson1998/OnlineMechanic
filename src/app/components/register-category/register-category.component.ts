import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register-category',
  templateUrl: './register-category.component.html',
  styleUrls: ['./register-category.component.css']
})
export class RegisterCategoryComponent implements OnInit {
  description: any;
  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
  }

  registerCategory(){
    let category = {
      description: this.description
    };
    console.log(category);
    
    this.categoryService.registerCategory(category).subscribe(
      {
        next: (res: any) => {
          console.log(res);
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: "Categoria Registrada con exito!",
            showConfirmButton: false,
            timer: 1500
          })
        },
        error: (error: any) => {
          console.log(error);
          
        }
      }
    );
  }
}
