import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isClient: any = false;
  isMechanicWorkShop: any = false;
  isMechanic: any = false;
  constructor(private router: Router) { 

    if ((+sessionStorage.getItem("roleId")!) == 2) {
      this.isClient = true;
    }else if((+sessionStorage.getItem("roleId")!) == 3){
      this.isMechanicWorkShop = true;
    }else{
      this.isMechanic = true;
    }
  }

  ngOnInit(): void {
  }

  logout(){
    //this.cookieService.delete("token");
    sessionStorage.clear();
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Sesión Cerrada con Exito!',
      showConfirmButton: false,
      timer: 2000
    })
    setTimeout(() => {
      this.router.navigate(["/login"]);
    }, 2500);
  }
}
