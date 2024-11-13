import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'https://api.jsonbin.io/v3/b/66faa41facd3cb34a88ed968';

  constructor(private http:HttpClient) { }

  getData(): Observable<any> {
    return this.http.get(this.apiUrl);
    
  }
}
