import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApplicationService } from 'src/app/services/application.service';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit {

  constructor(private router: Router, private applicationService: ApplicationService) { }

  ngOnInit(): void {

  }
  
  getApplicationsById(){

  }
  confirmApplication(){
    
  }
}
