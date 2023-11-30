import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url: string = "https://localhost:44355/api/";

  private headers: HttpHeaders | undefined;
  
  constructor(private http: HttpClient) { 

  }
  
  login(user: any): Observable<any>{
    return this.http.post(this.url + "User/Login", user);
  }

  registerUser(user: any): Observable<any>{
    return this.http.post(this.url + "User/CreateUser", user);
  }

  setHeaders() {
    this.headers = new HttpHeaders()
      .set("Content-Accept", "application/json")
      .set("X-Requested-With", "XMLHttpRequest")
      .set("Content-Type", "application/json")
      .set("Accept", "application/pdf");
  }
}
