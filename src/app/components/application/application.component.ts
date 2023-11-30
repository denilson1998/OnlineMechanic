import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApplicationService } from 'src/app/services/application.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit {
  applications: Array<any>;
  constructor(private router: Router, private applicationService: ApplicationService) { 
    this.applications = [];
  }

  ngOnInit(): void {
    this.getApplicationsById();
  }
  
  getApplicationsById(){
      this.applicationService.getApplications().subscribe(
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
  confirmApplication(applicationId: any){
    
    this.applicationService.updateApplication(applicationId).subscribe(
      {
        next: (res: any) => {
          console.log(res);
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Aplicación confirmada con Exito, el Mecanico se comunicara con usted',
            showConfirmButton: false,
            timer: 4500
          })
        },
        error: (error: any) => {
          console.log(error);
          
        }
      }
    );
  }
}
