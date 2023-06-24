import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactmailService {

  constructor(private http:HttpClient) { }
  apiUrl ="http://localhost:3000/contact";
  
  contactMail(data:any):Observable<any>{
    console.log(data, "Data created successfully");
    return this.http.post(`${this.apiUrl}/mail`,data)
  }
}
