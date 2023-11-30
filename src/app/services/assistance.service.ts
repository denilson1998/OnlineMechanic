import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssistanceService {
  private url: string = "https://localhost:44355/api/";

  private headers: HttpHeaders | undefined;
  
  constructor(private http: HttpClient) { 

  }
  
  createAssistance(assistance: any): Observable<any>{
    return this.http.post(this.url + "Assistance/CreateAssistance", assistance);
  }
  
  getAssistances(): Observable<any>{
    return this.http.get(this.url + "Assistance/GetAssistances");
  }
  
  setHeaders() {
    this.headers = new HttpHeaders()
      .set("Content-Accept", "application/json")
      .set("X-Requested-With", "XMLHttpRequest")
      .set("Content-Type", "application/json")
      .set("Accept", "application/pdf");
  }
}
