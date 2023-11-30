import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MechanicService {

  private url: string = "https://localhost:44355/api/";

  private headers: HttpHeaders | undefined;
  
  constructor(private http: HttpClient) { 

  }
  
  registerMechanic(mechanic: any): Observable<any>{
    return this.http.post(this.url + "Mechanic/CreateMechanic", mechanic);
  }
  setHeaders() {
    this.headers = new HttpHeaders()
      .set("Content-Accept", "application/json")
      .set("X-Requested-With", "XMLHttpRequest")
      .set("Content-Type", "application/json")
      .set("Accept", "application/pdf");
  }
}
