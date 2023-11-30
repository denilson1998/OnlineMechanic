import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApplicationService } from 'src/app/services/application.service';
import { AssistanceService } from 'src/app/services/assistance.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register-application',
  templateUrl: './register-application.component.html',
  styleUrls: ['./register-application.component.css']
})
export class RegisterApplicationComponent implements OnInit {
  assistances: Array<any>;
  arrivalTimeStimated: any;
  baseCost: any;
  constructor(private assistanceService: AssistanceService, private router: Router,
              private applicationService: ApplicationService) { 
    this.assistances = [];
    this.getAssistances();
  }

  ngOnInit(): void {
  }
  
  getAssistances(){

    this.assistanceService.getAssistances().subscribe(
      {
        next: (res: any) => {
          console.log(res);
          this.assistances = res;
          console.log(this.assistances);
          
        },
        error: (error: any) => {
          console.log(error);
          
        }
      }
    );
  }

  seeGpsLocation(gpsLocationLongitude: any, gpsLocationLatitude: any){

    sessionStorage.setItem("gpsLocationLongitudeToShow", gpsLocationLongitude);
    sessionStorage.setItem("gpsLocationLatitudeToShow", gpsLocationLatitude);

    this.router.navigate(["/maps"]);

  }

  registerApplication(){
    let application = {
      arrivalTimeStimated: this.arrivalTimeStimated,
      baseCost: this.baseCost,
      mechanicId: +sessionStorage.getItem("userId")!,
      assistanceId: +sessionStorage.getItem("AssistanceId")!
    }
    this.applicationService.createApplication(application).subscribe(
      {
        next: (res: any) => {
          console.log(res);
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: "Aplicación registrada con exito!",
            showConfirmButton: false,
            timer: 2000
          });
          
          setTimeout(() => {
            window.location.reload();
          }, 2100);
        },
        error: (error: any) => {
          console.log(error);
          
        }
      }
    );
  }

  saveAssistanceId(assistanceId: any){
    console.log(assistanceId);
    
    sessionStorage.setItem("AssistanceId", assistanceId);
  }

}
