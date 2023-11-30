import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {
  private url: string = "https://localhost:44355/api/";

  private headers: HttpHeaders | undefined;
  
  constructor(private http: HttpClient) { 

  }
  
  createApplication(application: any): Observable<any>{
    return this.http.post(this.url + "Application/CreateApplication", application);
  }
  
  getApplications(): Observable<any>{
    let clientId = +sessionStorage.getItem("userId")!;
    return this.http.get(this.url + `Application/GetApplications/${clientId}`);
  }

  updateApplication(applicationId: any): Observable<any>{
    
    return this.http.post(this.url + `Application/UpdateApplication/${applicationId}`, "");
  }
  
  getApplicationsByStatus(): Observable<any>{
    return this.http.get(this.url + `Application/GetApplicationsByStatus/3`);
  }

  
  setHeaders() {
    this.headers = new HttpHeaders()
      .set("Content-Accept", "application/json")
      .set("X-Requested-With", "XMLHttpRequest")
      .set("Content-Type", "application/json")
      .set("Accept", "application/pdf");
  }
}
