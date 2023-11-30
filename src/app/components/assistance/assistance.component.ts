import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AssistanceService } from 'src/app/services/assistance.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-assistance',
  templateUrl: './assistance.component.html',
  styleUrls: ['./assistance.component.css']
})
export class AssistanceComponent implements OnInit {
  
  description: any;
  Address: any;
  constructor(private router: Router, private assistanceService: AssistanceService) { 

  }

  ngOnInit(): void {
  }
  
  registerAssitance(){
    
    let assistance = {
      dateTime: Date.now,
      description: this.description,
      gpsLocationLongitude: sessionStorage.getItem("GpsLocationLongitude"),
      gpsLocationLatitude: sessionStorage.getItem("GpsLocationLatitude"),
      address: this.Address,
      clientId: +sessionStorage.getItem("userId")!
    }
    
    console.log(assistance);
    
    this.assistanceService.createAssistance(assistance).subscribe(
      {
        next: (res: any) => {
          console.log(res);
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: "Asistencia Registrado con exito!",
            showConfirmButton: false,
            timer: 1500
          });

          setTimeout(() => {
            this.router.navigate(["/home"]);
          }, 2100);
        },
        error: (error: any) => {
          console.log(error);
          
        }
      }
    );
  }
  
  changeLocation(){
    this.router.navigate(["/maps"]);
  }
}
