import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private url: string = "https://localhost:44355/api/";

  private headers: HttpHeaders | undefined;
  
  constructor(private http: HttpClient) { 

  }
  
  registerCategory(category: any): Observable<any>{
    return this.http.post(this.url + "Category/CreateCategory", category);
  }
  
  getListCategories(): Observable<any>{
    return this.http.get(this.url + "Category/GetCategories");
  }

  setHeaders() {
    this.headers = new HttpHeaders()
      .set("Content-Accept", "application/json")
      .set("X-Requested-With", "XMLHttpRequest")
      .set("Content-Type", "application/json")
      .set("Accept", "application/pdf");
  }
}
