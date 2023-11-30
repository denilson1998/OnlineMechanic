import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApplicationService } from 'src/app/services/application.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-applications-by-mechanic',
  templateUrl: './applications-by-mechanic.component.html',
  styleUrls: ['./applications-by-mechanic.component.css']
})
export class ApplicationsByMechanicComponent implements OnInit {
  applications: Array<any>
  constructor(private router: Router, private applicationService: ApplicationService) { 
    this.applications = [];
    this.getApplicationByStatus();
  }

  ngOnInit(): void {
  }

  getApplicationByStatus(){

    this.applicationService.getApplicationsByStatus().subscribe(
      {
        next: (res: any) => {
          console.log(res);
          this.applications = res;
        },
        error: (error: any) => {
          console.log(error);
          
        }
      }
    );
  }

  finishAplication(){
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Servicio Finalizado con Exito!',
      showConfirmButton: false,
      timer: 3000
    })

  }

}
