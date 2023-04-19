import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../book'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  baseUrl="http://localhost:8080/bookingpage";

  constructor(private httpClient:HttpClient) { }
 

  pre(books:Book): Observable<Object>{
    console.log(books);
    return this.httpClient.post(`${this.baseUrl}`,books);

  }
}
